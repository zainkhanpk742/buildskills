import Link from "next/link";

const lessons = [
  {
    n: "01",
    title: "How do I start a YouTube channel?",
    slug: "how-to-start-a-youtube-channel",
    body: "Choose an audience, a clear subject, and a repeatable format before worrying about equipment.",
  },
  {
    n: "02",
    title: "How do I find YouTube video ideas?",
    slug: "video-ideas",
    body: "Turn real questions, problems, demonstrations, and audience feedback into a useful video pipeline.",
  },
  {
    n: "03",
    title: "How do I make better YouTube titles and thumbnails?",
    slug: "titles-thumbnails",
    body: "Make the promise clear and accurate so the right viewer knows why the video is worth watching.",
  },
  {
    n: "04",
    title: "How do I improve YouTube audience retention?",
    slug: "audience-retention",
    body: "Get to the promised value quickly, remove unnecessary delay, and learn from viewer behavior.",
  },
  {
    n: "05",
    title: "How do I use YouTube Analytics?",
    slug: "youtube-analytics",
    body: "Use discovery, viewing, audience, and performance data to decide what to improve next.",
  },
  {
    n: "06",
    title: "How can I make money on YouTube?",
    slug: "make-money-on-youtube",
    body: "Understand YouTube monetization, YPP, and the wider business models that can turn attention into income.",
  },
];

const actions = [
  "Write one sentence describing who your channel helps and what it helps them do.",
  "List 20 questions that audience already asks about your subject.",
  "Choose your first 10 videos and group them into a connected learning sequence.",
  "Publish useful videos consistently enough to learn from real viewer behavior.",
  "Review Analytics after publishing and choose one improvement for the next video.",
  "Build an earning model around the audience you actually want: ads, fan support, products, services, sponsorships, or another legitimate offer.",
];

const mistakes = [
  "Buying subscribers, views, or engagement instead of building a real audience.",
  "Making videos only because a keyword has search volume.",
  "Using misleading titles or thumbnails that promise something the video does not deliver.",
  "Copying or repeatedly reusing other people's content without the rights or original value needed for monetization.",
  "Treating subscriber count as the whole business instead of asking whether the audience is relevant.",
  "Assuming today's monetization thresholds or features will never change.",
];

export const metadata = {
  title: "YouTube Learning Path",
  description:
    "Learn how to start a YouTube channel, find video ideas, improve titles and retention, use YouTube Analytics, and understand YouTube monetization.",
};

export default function Page() {
  return (
    <main>
      <section className="container" style={{ padding: "86px 0 54px" }}>
        <p className="eyebrow">LEARN · YOUTUBE</p>
        <h1
          style={{
            fontSize: "clamp(44px, 7vw, 78px)",
            letterSpacing: "-.055em",
            lineHeight: 1,
            maxWidth: "920px",
            margin: "0 0 22px",
          }}
        >
          How do I grow and make money on YouTube?
        </h1>
        <p
          style={{
            maxWidth: "780px",
            color: "#667085",
            fontSize: "20px",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Start with a useful channel. Learn how to choose topics, make better
          videos, understand your audience, and build a sustainable path to
          monetization.
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
          <Link className="primary-btn" href="#learning-path">
            Start the learning path ↓
          </Link>
          <Link className="secondary-btn" href="/questions">
            Browse all questions
          </Link>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: "64px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "14px",
          }}
        >
          {[
            ["01", "Start", "Define the audience and channel promise."],
            ["02", "Create", "Find problems worth turning into videos."],
            ["03", "Improve", "Use titles, thumbnails, and retention data."],
            ["04", "Grow", "Build a connected library and audience."],
            ["05", "Monetize", "Understand YPP and wider business models."],
          ].map(([n, title, body]) => (
            <div key={n} className="card" style={{ padding: "22px" }}>
              <p className="eyebrow" style={{ marginBottom: "10px" }}>{n}</p>
              <h2 style={{ margin: "0 0 8px", fontSize: "22px" }}>{title}</h2>
              <p style={{ margin: 0, color: "#667085", lineHeight: 1.6 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="learning-path" className="container" style={{ paddingBottom: "82px" }}>
        <div style={{ maxWidth: "760px", marginBottom: "30px" }}>
          <p className="eyebrow">THE PATH</p>
          <h2 style={{ fontSize: "clamp(32px,5vw,52px)", letterSpacing: "-.04em", margin: "0 0 14px" }}>
            Learn YouTube in order
          </h2>
          <p style={{ color: "#667085", lineHeight: 1.7, margin: 0 }}>
            Each lesson answers one practical question and points to the next.
            You do not need to master everything before publishing; use the
            path to learn, publish, measure, and improve.
          </p>
        </div>

        <div style={{ display: "grid", gap: "14px" }}>
          {lessons.map((lesson) => (
            <Link
              key={lesson.slug}
              href={"/learn/youtube/" + lesson.slug}
              className="card"
              style={{
                display: "grid",
                gridTemplateColumns: "58px minmax(0,1fr) auto",
                gap: "18px",
                alignItems: "start",
                padding: "24px",
                textDecoration: "none",
              }}
            >
              <span style={{ fontWeight: 700, color: "#667085" }}>{lesson.n}</span>
              <span>
                <strong style={{ display: "block", fontSize: "21px", marginBottom: "7px" }}>
                  {lesson.title}
                </strong>
                <span style={{ color: "#667085", lineHeight: 1.6 }}>{lesson.body}</span>
              </span>
              <span aria-hidden="true" style={{ fontSize: "22px" }}>→</span>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: "#f7f8fa", padding: "72px 0" }}>
        <div className="container">
          <div style={{ maxWidth: "760px", marginBottom: "28px" }}>
            <p className="eyebrow">BUILD SOMETHING</p>
            <h2 style={{ fontSize: "clamp(32px,5vw,52px)", letterSpacing: "-.04em", margin: "0 0 14px" }}>
              Your first YouTube project
            </h2>
            <p style={{ color: "#667085", lineHeight: 1.7, margin: 0 }}>
              Do not finish the learning path first. Start building while you
              learn. Your first project is a small, useful channel with ten
              planned videos.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "14px",
            }}
          >
            {actions.map((action, index) => (
              <div key={action} className="card" style={{ padding: "22px" }}>
                <p className="eyebrow">STEP {index + 1}</p>
                <p style={{ margin: "8px 0 0", lineHeight: 1.65 }}>{action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: "78px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "24px",
          }}
        >
          <div className="card" style={{ padding: "28px" }}>
            <p className="eyebrow">MONETIZATION</p>
            <h2 style={{ fontSize: "30px", letterSpacing: "-.03em", margin: "0 0 14px" }}>
              Monetization is a business model, not a magic button.
            </h2>
            <p style={{ color: "#667085", lineHeight: 1.7 }}>
              YouTube's Partner Program can provide access to advertising and
              other monetization features, but eligibility is reviewed and
              individual features have their own requirements. A creator can
              also earn outside the platform through services, products,
              sponsorships, affiliate relationships, courses, or memberships.
            </p>
            <p style={{ color: "#667085", lineHeight: 1.7 }}>
              The full advertising eligibility rules include audience
              thresholds, account setup, regional availability, and policy
              review. These rules change; use our{" "}
              <Link href="/learn/youtube/make-money-on-youtube">
                detailed YouTube monetization guide
              </Link>{" "}
              for the current requirements and official references, then
              confirm your own eligibility in YouTube Studio before making
              plans.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "18px" }}>
              <a
                className="secondary-btn"
                href="https://support.google.com/youtube/answer/72851"
                target="_blank"
                rel="noreferrer"
              >
                YPP eligibility ↗
              </a>
              <a
                className="secondary-btn"
                href="https://support.google.com/youtube/answer/72857"
                target="_blank"
                rel="noreferrer"
              >
                Ways to earn ↗
              </a>
            </div>
          </div>

          <div className="card" style={{ padding: "28px" }}>
            <p className="eyebrow">THINK LIKE A CREATOR</p>
            <h2 style={{ fontSize: "30px", letterSpacing: "-.03em", margin: "0 0 14px" }}>
              Make videos for people first.
            </h2>
            <p style={{ color: "#667085", lineHeight: 1.7 }}>
              A useful channel does not need to chase every trend. Pick a
              subject you can explain, demonstrate, or explore repeatedly.
              Build a library where one answer naturally leads to another.
            </p>
            <p style={{ color: "#667085", lineHeight: 1.7 }}>
              YouTube says monetized content should be original and authentic,
              and its policies address repetitive and reused content. Build
              something that adds real value rather than a collection of
              near-identical pages or videos.
            </p>
            <a
              className="secondary-btn"
              href="https://support.google.com/youtube/answer/2490020"
              target="_blank"
              rel="noreferrer"
            >
              Content monetization policies ↗
            </a>
          </div>
        </div>
      </section>

      <section style={{ background: "#111827", color: "#fff", padding: "72px 0" }}>
        <div className="container">
          <p className="eyebrow" style={{ color: "#cbd5e1" }}>AVOID THESE TRAPS</p>
          <h2 style={{ fontSize: "clamp(32px,5vw,52px)", letterSpacing: "-.04em", margin: "0 0 28px", maxWidth: "780px" }}>
            Build an audience you can trust.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "12px" }}>
            {mistakes.map((mistake) => (
              <div key={mistake} style={{ border: "1px solid rgba(255,255,255,.14)", borderRadius: "16px", padding: "20px", lineHeight: 1.6 }}>
                {mistake}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: "78px 0 100px" }}>
        <div className="card" style={{ padding: "30px", maxWidth: "850px" }}>
          <p className="eyebrow">NEXT</p>
          <h2 style={{ fontSize: "34px", letterSpacing: "-.035em", margin: "0 0 12px" }}>
            Ready to start?
          </h2>
          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Begin with the first lesson, write your channel promise, and
            create your first ten-video plan. Then publish, learn from real
            viewers, and keep improving.
          </p>
          <Link className="primary-btn" href="/learn/youtube/how-to-start-a-youtube-channel">
            Start: create your channel →
          </Link>
        </div>
      </section>
    </main>
  );
}
