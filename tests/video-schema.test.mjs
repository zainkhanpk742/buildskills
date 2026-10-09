// Fails if any VideoObject uploadDate lacks a timezone (Search Console: "uploadDate is missing a timezone").
// 1) Checks every GuideVideo in src/data/guideVideos.ts (the source of all VideoObject JSON-LD).
// 2) After `next build`, also checks every VideoObject in the prerendered HTML under .next/server/app.
// Run: npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";
import ts from "typescript";

const ISO_WITH_TZ = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:\d{2})$/;
const ISO_DURATION = /^P(T(?=\d)(\d+H)?(\d+M)?(\d+(\.\d+)?S)?)$/;

function checkVideo(label, v) {
  assert.ok(typeof v.uploadDate === "string" && ISO_WITH_TZ.test(v.uploadDate), `${label}: uploadDate "${v.uploadDate}" must be ISO 8601 with a timezone`);
  assert.ok(!Number.isNaN(Date.parse(v.uploadDate)), `${label}: uploadDate "${v.uploadDate}" is not a valid datetime`);
  assert.ok(typeof v.duration === "string" && ISO_DURATION.test(v.duration), `${label}: duration "${v.duration}" must be ISO 8601 (e.g. PT15S)`);
  for (const key of ["name", "description"]) assert.ok(typeof v[key] === "string" && v[key].trim(), `${label}: ${key} is missing`);
}

function loadVideoData() {
  const source = readFileSync(new URL("../src/data/guideVideos.ts", import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } });
  const mod = { exports: {} };
  new Function("module", "exports", "require", outputText)(mod, mod.exports, () => {
    throw new Error("guideVideos.ts must not import other modules");
  });
  return mod.exports;
}

test("every GuideVideo has a timezone-qualified uploadDate and required fields", () => {
  const data = loadVideoData();
  const videos = [];
  for (const [name, value] of Object.entries(data)) {
    if (value && typeof value === "object" && "uploadDate" in value) videos.push([name, value]);
    else if (value && typeof value === "object" && !(value instanceof Set)) {
      for (const [key, v] of Object.entries(value)) if (v && typeof v === "object" && "uploadDate" in v) videos.push([`${name}["${key}"]`, v]);
    }
  }
  assert.ok(videos.length > 0, "no videos found in guideVideos.ts");
  for (const [label, v] of videos) {
    checkVideo(label, v);
    assert.ok(typeof v.id === "string" && /^[\w-]{11}$/.test(v.id), `${label}: id "${v.id}" is not a YouTube video id`);
  }
});

function htmlFiles(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...htmlFiles(p));
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}

function* videoObjects(node) {
  if (Array.isArray(node)) for (const n of node) yield* videoObjects(n);
  else if (node && typeof node === "object") {
    if (node["@type"] === "VideoObject") yield node;
    for (const v of Object.values(node)) yield* videoObjects(v);
  }
}

const built = new URL("../.next/server/app", import.meta.url);
test("every VideoObject in the built HTML has a timezone-qualified uploadDate", { skip: !existsSync(built) && "run `next build` first" }, () => {
  let count = 0;
  for (const file of htmlFiles(built.pathname)) {
    const html = readFileSync(file, "utf8");
    for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      for (const vo of videoObjects(JSON.parse(m[1]))) {
        count++;
        const label = `${file.replace(built.pathname, "")} ${vo.name}`;
        checkVideo(label, vo);
        assert.ok(vo.thumbnailUrl, `${label}: thumbnailUrl is missing`);
        assert.ok(vo.embedUrl || vo.contentUrl, `${label}: embedUrl/contentUrl is missing`);
      }
    }
  }
  assert.ok(count > 0, "no VideoObject found in built HTML");
});
