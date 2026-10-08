import type { Guide } from "@/data/site";

/**
 * Urdu guides. Written in Urdu script, shown right-to-left with lang="ur".
 * Technical words stay in English where Pakistanis normally use them.
 * Every UI name and number was checked against the official pages in
 * `sources` on 8 October 2026.
 */
export const URDU_WEBSITE_GUIDE = "websites/website-banane-ka-tarika-urdu";

export const urduGuides: Guide[] = [
  {
    slug: URDU_WEBSITE_GUIDE,
    lang: "ur",
    alternate: { href: "/learn/websites/how-to-build-a-website", hreflang: "en", label: "Read in English" },
    area: "Websites",
    title: "ویب سائٹ بنانے کا طریقہ (اردو گائیڈ)",
    h1: "ویب سائٹ بنانے کا طریقہ: اردو میں مکمل گائیڈ",
    summary:
      "پہلے ویب سائٹ کا مقصد طے کریں، پھر AI سے کوڈ لکھوائیں، GitHub پر ایک repository میں فائلیں رکھیں اور Vercel سے ویب سائٹ مفت میں آن لائن کریں۔ آخر میں اپنا domain جوڑیں اور Google Search Console میں ویب سائٹ شامل کریں۔",
    checkedDate: "2026-10-08",
    difficulty: "Beginner",
    topics: ["ویب سائٹ بنانا", "GitHub", "Vercel", "domain", "DNS", "ChatGPT", "Grok", "Cursor"],
    paragraphs: [],
    sections: [
      {
        heading: "یہ گائیڈ کس کے لیے ہے",
        paragraphs: [
          "یہ گائیڈ ان لوگوں کے لیے ہے جو پہلی بار اپنی ویب سائٹ بنانا چاہتے ہیں: طالب علم، فری لانسر، دکاندار یا کوئی چھوٹا کاروبار۔ آپ کو پروگرامنگ آنا ضروری نہیں۔ ہم وہی طریقہ سمجھائیں گے جو آج کل بہت سے لوگ استعمال کرتے ہیں: کوڈ GitHub پر رکھا جاتا ہے، Vercel اسے انٹرنیٹ پر شائع (deploy) کرتا ہے، اور ChatGPT، Grok یا Cursor جیسے AI ٹولز کوڈ لکھنے میں مدد کرتے ہیں۔",
          "پورا کام سات مرحلوں میں ہے، اور ہر مرحلے کے آخر میں ایک چھوٹی ٹپ دی گئی ہے۔ اگر آپ پہلی بار کر رہے ہیں تو ایک سادہ، ایک صفحے کی ویب سائٹ سے شروع کریں۔ باقی صفحات بعد میں آسانی سے شامل کیے جا سکتے ہیں۔",
        ],
        bullets: [
          "ایک ای میل ایڈریس، جس سے GitHub اور Vercel کے اکاؤنٹ بنیں گے۔",
          "کمپیوٹر یا لیپ ٹاپ۔ موبائل سے بھی ممکن ہے مگر پہلی بار کمپیوٹر پر آسان رہتا ہے۔",
          "کوئی AI ٹول۔ مفت ChatGPT یا Grok کافی ہے۔",
          "اپنا domain (جیسے yourname.pk) لینا ہو تو اس کی فیس۔ یہ اختیاری ہے۔",
        ],
      },
      {
        heading: "مرحلہ 1: ویب سائٹ کا مقصد اور آئیڈیا طے کریں",
        paragraphs: [
          "سب سے پہلے کاغذ پر یا موبائل کے نوٹس میں ایک جملہ لکھیں کہ ویب سائٹ کس کام کے لیے ہے۔ مثلاً: «میری ٹیوشن اکیڈمی کا تعارف کرانا اور والدین کو WhatsApp پر رابطے کی سہولت دینا»۔ جب مقصد ایک جملے میں واضح ہو جائے تو ڈیزائن، صفحات اور مواد کے فیصلے آسان ہو جاتے ہیں۔",
        ],
        bullets: [
          "مقصد: لوگ ویب سائٹ پر آ کر کیا کریں؟ رابطہ، خریداری، بکنگ یا معلومات پڑھنا؟",
          "کس کے لیے: آپ کے گاہک، طلبہ، والدین یا کمپنیاں کون ہیں، اور وہ کون سی زبان پڑھتے ہیں؟",
          "صفحات: شروع میں تین سے پانچ صفحات کافی ہیں، جیسے Home، About، Services اور Contact۔",
          "نام: چھوٹا، یاد رہنے والا اور بولنے میں آسان نام رکھیں۔ یہی نام بعد میں آپ کا domain بن سکتا ہے۔",
          "مواد: ہر صفحے کا متن اور تصاویر پہلے سے تیار رکھیں۔ AI کوڈ لکھ سکتا ہے، مگر آپ کے کام کی سچی معلومات صرف آپ دے سکتے ہیں۔",
        ],
        tip: "کوئی ایسی ویب سائٹ دیکھیں جو آپ کو پسند ہو اور لکھیں کہ اس میں کیا اچھا لگا۔ اس کا ڈیزائن یا متن کاپی نہ کریں، صرف خیال لیں۔",
      },
      {
        heading: "مرحلہ 2: ویب سائٹ بنانے کا طریقہ چنیں",
        paragraphs: [
          "آج کل ویب سائٹ کا کوڈ عموماً AI کی مدد سے لکھا جاتا ہے۔ آپ کے پاس کون سا ٹول ہے، اس کے مطابق دو راستے ہیں۔ دونوں راستوں میں آخر میں ویب سائٹ GitHub پر رہتی ہے اور Vercel پر شائع ہوتی ہے۔",
          "راستہ A (سب سے آسان اور تیز): اگر آپ کے پاس کوئی پیڈ AI coding ٹول ہے، جیسے Cursor، Claude، ChatGPT Plus / Codex یا اس جیسا کوئی اور، تو اسے اپنے GitHub اکاؤنٹ سے جوڑ دیں اور GitHub کو Vercel سے۔ پھر AI خود کوڈ لکھ کر آپ کی repository میں محفوظ (commit) کرتا ہے، اور Vercel ہر نئی تبدیلی کو خود بخود deploy کر دیتا ہے۔ آپ کا کام صرف یہ بتانا ہے کہ کیا بنانا ہے، اور نتیجہ چیک کرنا ہے۔",
          "راستہ B (بالکل مفت): اگر آپ کے پاس پیڈ ٹول نہیں ہے تو مفت Grok یا ChatGPT سے کوڈ لکھوائیں۔ AI جو کوڈ دے، اسے کاپی کریں اور مرحلہ 3 کے مطابق GitHub میں خود فائل بنا کر paste کریں۔ اس میں چند منٹ زیادہ لگتے ہیں، مگر ایک سادہ ویب سائٹ کے لیے یہ طریقہ کافی ہے۔",
        ],
        examples: [
          {
            label: "راستہ A کے لیے prompt (کاپی کریں)",
            text: "میرے لیے ایک سادہ، تیز اور موبائل پر اچھی دکھنے والی ویب سائٹ بناؤ۔ یہ «[آپ کے کام کا نام]» کے لیے ہے جو [شہر] میں [کام کی تفصیل] کرتا ہے۔ صفحات: Home، About، Services، Contact۔ Contact صفحے پر WhatsApp کا بٹن لگاؤ۔ صرف HTML اور CSS استعمال کرو تاکہ ویب سائٹ Vercel پر بغیر build کے چل جائے۔ فائلیں repository کی root میں رکھو اور ہوم پیج کا نام index.html ہو۔ ہر تبدیلی کے بعد commit کرو۔",
          },
          {
            label: "راستہ B کے لیے prompt (کاپی کریں)",
            text: "مجھے ایک صفحے کی ویب سائٹ کا مکمل کوڈ ایک ہی index.html فائل میں دو۔ CSS بھی اسی فائل کے اندر <style> ٹیگ میں ہو۔ ویب سائٹ «[نام]» کے لیے ہے۔ اس میں یہ حصے ہوں: سب سے اوپر نام اور ایک لائن کا تعارف، سروسز کی فہرست، «رابطہ کریں» کا بٹن، اور آخر میں فون نمبر اور ای میل۔ ویب سائٹ موبائل پر اچھی دکھنی چاہیے۔ پوری فائل کا کوڈ دو اور وضاحت مختصر رکھو۔",
          },
        ],
        tip: "prompt میں اپنی اصل معلومات دیں: نام، شہر، سروسز اور رابطہ۔ AI سے جعلی ریویو یا فرضی گاہکوں کے نام نہ لکھوائیں، اور جو کوڈ ملے اسے لگانے سے پہلے ایک بار ضرور پڑھ لیں۔",
      },
      {
        heading: "مرحلہ 3: GitHub اکاؤنٹ اور repository بنائیں",
        paragraphs: [
          "GitHub ایک ویب سائٹ ہے جہاں کوڈ محفوظ رکھا جاتا ہے۔ Repository (مختصراً repo) ایک فولڈر کی طرح ہے جس میں آپ کی ویب سائٹ کی تمام فائلیں اور ان کی ہر تبدیلی کا ریکارڈ رہتا ہے۔ ہر محفوظ کی گئی تبدیلی کو commit کہتے ہیں۔ GitHub کی دستاویزات کے مطابق یہ طریقہ ہے:",
        ],
        steps: [
          "github.com پر Sign up کریں، ای میل کی تصدیق کریں اور ایک username چنیں۔",
          "کسی بھی صفحے کے اوپر دائیں کونے میں + کا نشان دبائیں، پھر New repository پر کلک کریں۔",
          "Repository کا مختصر نام لکھیں، مثلاً my-website۔ چاہیں تو Description بھی لکھ دیں۔",
          "Visibility چنیں: Public (سب دیکھ سکتے ہیں) یا Private (صرف آپ)۔",
          "Add README کو On کریں اور Create repository دبائیں۔",
          "فائلوں کی فہرست کے اوپر Add file مینو کھولیں اور Create new file چنیں۔ فائل کا نام index.html لکھیں اور AI کا دیا ہوا کوڈ paste کریں۔",
          "Commit changes... دبائیں، ایک چھوٹا سا commit message لکھیں (مثلاً «پہلا صفحہ شامل کیا»)، پھر Commit changes پر کلک کریں۔",
          "تصاویر یا پہلے سے بنی فائلیں ڈالنی ہوں تو Add file میں Upload files چنیں، فائلیں drag کر کے ڈالیں اور commit کریں۔",
        ],
        bullets: [
          "GitHub کے مطابق براؤزر سے اپلوڈ کی گئی ہر فائل زیادہ سے زیادہ 25 MiB کی ہو سکتی ہے، اور ایک وقت میں 100 فائلیں اپلوڈ ہو سکتی ہیں (8 اکتوبر 2026 کو چیک کیا گیا)۔",
          "GitHub بڑے پراجیکٹس میں نئی branch بنا کر pull request کا مشورہ دیتا ہے۔ آپ کی پہلی سادہ ویب سائٹ کے لیے سیدھا main branch پر commit کرنا ٹھیک ہے۔",
        ],
        tip: "ہوم پیج والی فائل کا نام ہمیشہ index.html رکھیں، چھوٹے حروف میں۔ ویب سائٹ کھلتے ہی یہی فائل دکھائی جاتی ہے۔ پاس ورڈ یا API key کبھی repository میں نہ ڈالیں۔",
      },
      {
        heading: "مرحلہ 4: Vercel پر ویب سائٹ مفت میں شائع کریں",
        paragraphs: [
          "Vercel آپ کی repository سے ویب سائٹ بنا کر اسے انٹرنیٹ پر شائع کرتا ہے۔ Vercel کی دستاویزات کے مطابق ہر deployment کو vercel.app والا ایک پتہ ملتا ہے، اور GitHub سے جڑنے کے بعد production branch (عموماً main) پر ہر نئی تبدیلی سے خود بخود نئی deployment بن جاتی ہے۔",
        ],
        steps: [
          "vercel.com پر Sign Up کریں اور GitHub کے ذریعے لاگ اِن کا آپشن چنیں، تاکہ دونوں اکاؤنٹ جُڑ جائیں۔",
          "Dashboard پر New Project کا بٹن دبائیں۔ آپ کی GitHub repositories کی فہرست سامنے آ جائے گی۔ اگر آپ کی repository نظر نہ آئے تو Vercel کو GitHub پر اس repository تک رسائی کی اجازت دیں۔",
          "اپنی repository کے سامنے Import دبائیں۔",
          "اگلے صفحے پر project کا نام دیکھ لیں۔ سادہ HTML ویب سائٹ کے لیے Framework Preset اور باقی settings ویسے ہی رہنے دیں۔",
          "Deploy دبائیں۔ کچھ دیر بعد آپ کو your-project.vercel.app جیسا لنک مل جائے گا۔ اسے موبائل اور کمپیوٹر دونوں پر کھول کر چیک کریں۔",
        ],
        bullets: [
          "اہم: Vercel کا مفت Hobby پلان اس کی شرائط کے مطابق صرف ذاتی اور غیر تجارتی (non-commercial) استعمال کے لیے ہے (8 اکتوبر 2026 کو چیک کیا گیا)۔ کاروباری ویب سائٹ کے لیے Vercel کی موجودہ شرائط اور Pro پلان دیکھ لیں۔",
        ],
        tip: "اگر deployment میں error آئے تو Vercel میں اس deployment کے build logs کھولیں، error کا متن کاپی کر کے ChatGPT یا Grok کو دیں اور پوچھیں کہ اسے کیسے ٹھیک کیا جائے۔",
      },
      {
        heading: "مرحلہ 5: اپنا domain خریدیں اور Vercel سے جوڑیں",
        paragraphs: [
          "Domain آپ کی ویب سائٹ کا اپنا پتہ ہے، جیسے yourname.pk یا yourname.com۔ vercel.app والا لنک مفت ہے، مگر اپنا domain زیادہ قابلِ اعتماد لگتا ہے اور یاد رکھنا آسان ہوتا ہے۔",
          ".pk domain: یہ PKNIC کے ذریعے ملتے ہیں (جیسے .pk اور .com.pk)۔ آپ PKNIC کی ویب سائٹ سے براہِ راست یا اس کے مجاز resellers سے خرید سکتے ہیں۔ PKNIC کی ویب سائٹ کے مطابق پاکستان میں رہنے والوں کے لیے فیس Rs 2,100 فی سال ہے (یکم اگست 2026 سے)، اور ادائیگی دو سال کے لیے اکٹھی ہوتی ہے (8 اکتوبر 2026 کو چیک کیا گیا)۔ reseller اپنی سروس کی فیس الگ لے سکتا ہے۔",
          ".com domain: کسی بھی معروف registrar سے، یا Vercel سے بھی خریدا جا سکتا ہے۔ قیمت registrar کے حساب سے بدلتی ہے، اس لیے خریدنے سے پہلے اگلے سال کی renewal قیمت بھی دیکھیں۔ Domain خریدنے کے بعد Vercel کی دستاویزات کے مطابق یوں جوڑیں:",
        ],
        steps: [
          "Vercel dashboard میں اپنا project کھولیں، Settings میں جائیں اور Domains چنیں۔",
          "Add Domain دبائیں اور اپنا domain لکھیں، مثلاً yourname.pk۔ Vercel آپ سے www والا ورژن بھی شامل کرنے کا کہے گا؛ اسے بھی شامل کریں۔",
          "Vercel آپ کو DNS records دکھائے گا: بنیادی domain (جیسے yourname.pk) کے لیے A record، اور www جیسے subdomain کے لیے CNAME record۔",
          "جہاں سے domain خریدا ہے (registrar) وہاں کی DNS settings کھولیں اور بالکل وہی values ڈالیں جو Vercel کے Domains صفحے پر آپ کے project کے لیے دکھائی گئی ہیں۔",
          "انتظار کریں۔ DNS کی تبدیلی پھیلنے میں وقت لگتا ہے۔ جب Vercel domain کو درست (verified) دکھا دے تو SSL، یعنی https والا تالا، خود بخود لگ جاتا ہے۔",
        ],
        bullets: [
          "Vercel کی دستاویزات خبردار کرتی ہیں کہ nameservers بدلنے سے پہلے پرانے DNS records، خاص طور پر ای میل والے MX records، کاپی کر لیں۔ صرف A یا CNAME record بدلنے سے باقی records پر اثر نہیں پڑتا۔",
          "کسی اور ویب سائٹ یا ویڈیو سے DNS values کاپی نہ کریں۔ ہر project کی values اپنے Domains صفحے سے لیں۔",
        ],
        tip: "اگر Vercel «Invalid Configuration» دکھائے تو دیکھیں کہ اسی نام کے پرانے A، AAAA یا CNAME records تو موجود نہیں۔ یہ آپس میں ٹکراتے ہیں؛ انہیں ہٹا دیں۔",
      },
      {
        heading: "مرحلہ 6: بعد میں ویب سائٹ اپڈیٹ کریں",
        paragraphs: [
          "ویب سائٹ ایک بار بن جائے تو اسے اپڈیٹ کرنا آسان ہے۔ کیونکہ Vercel آپ کی GitHub repository سے جڑا ہے، اس لیے main branch پر ہر نیا commit خود بخود نئی deployment بنا دیتا ہے۔ آپ کو دوبارہ کچھ upload نہیں کرنا پڑتا۔",
        ],
        steps: [
          "GitHub پر خود: repository میں فائل کھولیں، اوپر دائیں طرف pencil (edit) کا نشان دبائیں، تبدیلی کریں، Preview دیکھیں اور Commit changes کریں۔",
          "پیڈ AI سے (راستہ A): اپنے AI ٹول کو بتائیں کیا بدلنا ہے، مثلاً «Services صفحے پر ایک نئی سروس شامل کرو اور commit کرو»۔",
          "مفت AI سے (راستہ B): موجودہ فائل کا کوڈ ChatGPT یا Grok کو دیں، تبدیلی بتائیں، نیا کوڈ لے کر GitHub میں فائل edit کریں، paste کریں اور commit کریں۔",
        ],
        examples: [
          {
            label: "تبدیلی کے لیے prompt (کاپی کریں)",
            text: "یہ میری index.html فائل کا کوڈ ہے۔ اس میں صرف Contact والے حصے میں فون نمبر بدل کر [نیا نمبر] کر دو اور باقی کوڈ بالکل نہ بدلو۔ پوری فائل دوبارہ دو۔",
          },
        ],
        tip: "ایک وقت میں ایک تبدیلی کریں اور ہر commit کا واضح نام رکھیں۔ اگر کچھ خراب ہو جائے تو GitHub پر فائل کی history میں پرانا ورژن دیکھ کر واپس لایا جا سکتا ہے۔",
      },
      {
        heading: "مرحلہ 7: اگلے قدم: ویب سائٹ کو Google تک پہنچائیں",
        paragraphs: [
          "ویب سائٹ لائیو ہونے کا مطلب یہ نہیں کہ لوگ اسے فوراً Google پر ڈھونڈ لیں گے۔ اس کے لیے Google کا مفت ٹول Google Search Console استعمال کریں۔",
        ],
        steps: [
          "Google Search Console میں اپنی ویب سائٹ بطور property شامل کریں اور ملکیت کی تصدیق کریں۔ Domain property کے لیے آپ کے DNS میں ایک TXT record لگانا پڑتا ہے۔",
          "Sitemap بنائیں: یہ ایک فائل (عموماً sitemap.xml) ہوتی ہے جس میں آپ کے تمام صفحات کے مکمل پتے ہوتے ہیں۔ Google کے مطابق پتے مکمل (absolute) ہونے چاہییں، جیسے https://yourname.pk/about۔ چھوٹی ویب سائٹ کے لیے AI سے بنوا کر repository میں رکھ دیں۔",
          "Search Console کی Sitemaps رپورٹ میں sitemap کا پتہ جمع کرائیں۔ Google کے مطابق sitemap صرف ایک اشارہ ہے؛ اس سے indexing کی ضمانت نہیں ملتی۔",
          "ہر صفحے کا واضح title اور مختصر description رکھیں، اور ایسا مواد لکھیں جو واقعی لوگوں کے سوال کا جواب دے۔",
        ],
        after: [
          "SEO سیکھنے کے لیے نیچے «متعلقہ گائیڈز» میں BuildSkills کی SEO گائیڈز کے لنک موجود ہیں: SEO کیا ہے، ویب سائٹ کو Google پر کیسے لائیں، اور مفت SEO کورس۔ یہ گائیڈز ابھی انگریزی میں ہیں۔",
        ],
        tip: "Search Console میں نتائج آنے میں کچھ دن لگ سکتے ہیں۔ اس دوران نئے صفحات اور اچھا مواد شامل کرتے رہیں۔",
      },
      {
        heading: "عام غلطیاں جن سے بچنا چاہیے",
        paragraphs: ["زیادہ تر مسائل انہی چند غلطیوں سے پیدا ہوتے ہیں۔ شروع میں ہی ان سے بچ جائیں تو وقت اور پیسہ دونوں بچتے ہیں۔"],
        bullets: [
          "مقصد طے کیے بغیر ڈیزائن شروع کر دینا۔",
          "ہوم پیج فائل کا نام index.html کے بجائے Index.HTML یا home.html رکھ دینا۔",
          "پاس ورڈ، API key یا ذاتی معلومات repository میں ڈال دینا، خاص طور پر Public repository میں۔",
          "بہت بڑی تصاویر اپلوڈ کرنا، جس سے ویب سائٹ سست کھلتی ہے۔ تصاویر پہلے چھوٹی (compress) کر لیں۔",
          "DNS میں کسی اور کی بتائی ہوئی values ڈالنا، یا اسی نام کے پرانے A/CNAME records نہ ہٹانا۔",
          "AI کا کوڈ پڑھے بغیر لگا دینا، اور ویب سائٹ کو موبائل پر چیک نہ کرنا۔",
          "Domain کی renewal کی تاریخ بھول جانا۔ میعاد ختم ہونے پر ویب سائٹ بند ہو سکتی ہے۔",
          "کاروباری ویب سائٹ کو Vercel کے مفت Hobby پلان پر چلانا، جبکہ یہ پلان غیر تجارتی استعمال کے لیے ہے۔",
        ],
      },
    ],
    faqs: [
      {
        question: "کیا ویب سائٹ بالکل مفت بن سکتی ہے؟",
        answer: "ذاتی ویب سائٹ کے لیے جی ہاں۔ GitHub اکاؤنٹ، مفت AI (ChatGPT یا Grok) اور Vercel کے مفت Hobby پلان سے آپ vercel.app والے لنک پر ویب سائٹ بنا سکتے ہیں۔ اپنا domain لینا ہو تو اس کی فیس الگ ہے، اور کاروباری استعمال کے لیے Vercel کی شرائط دیکھیں۔",
      },
      {
        question: "کیا کوڈنگ آنا ضروری ہے؟",
        answer: "نہیں۔ کوڈ AI لکھ دیتا ہے۔ البتہ چند بنیادی باتیں سمجھنا فائدہ مند ہے: فائل کیا ہوتی ہے، index.html کیوں ضروری ہے اور commit کیا ہے۔ تھوڑی سی HTML اور CSS سیکھ لیں تو آپ AI کا کوڈ بہتر طریقے سے چیک کر سکیں گے۔",
      },
      {
        question: ".pk domain کہاں سے ملتا ہے اور کتنے کا ہے؟",
        answer: ".pk domains کی registry PKNIC ہے۔ آپ اس کی ویب سائٹ سے براہِ راست یا مجاز resellers سے خرید سکتے ہیں۔ 8 اکتوبر 2026 کو PKNIC کی ویب سائٹ پر پاکستان میں رہنے والوں کے لیے فیس Rs 2,100 فی سال درج تھی، اور ادائیگی دو سال کے لیے ہوتی ہے۔ reseller کی فیس الگ ہو سکتی ہے۔",
      },
      {
        question: "راستہ A اور راستہ B میں سے کون سا بہتر ہے؟",
        answer: "راستہ A تیز ہے کیونکہ AI خود repository میں کوڈ لکھتا ہے اور Vercel خود deploy کرتا ہے، مگر اس کے لیے پیڈ ٹول چاہیے۔ راستہ B مفت ہے؛ اس میں AI کا کوڈ آپ خود GitHub میں paste کرتے ہیں۔ سادہ ویب سائٹ کے لیے راستہ B کافی ہے۔",
      },
      {
        question: "Domain جوڑنے کے بعد ویب سائٹ کیوں نہیں کھل رہی؟",
        answer: "DNS کی تبدیلی پھیلنے میں وقت لگتا ہے۔ اگر کافی دیر بعد بھی مسئلہ رہے تو Vercel کے Domains صفحے پر دکھائی گئی values کو اپنے registrar کے records سے ملائیں، اور اسی نام کے پرانے A یا CNAME records ہٹا دیں۔",
      },
      {
        question: "کیا موبائل سے ویب سائٹ بنائی جا سکتی ہے؟",
        answer: "GitHub اور Vercel موبائل براؤزر میں بھی کھل جاتے ہیں، اس لیے چھوٹی تبدیلیاں موبائل سے ہو سکتی ہیں۔ مگر پہلی بار پورا سیٹ اپ کمپیوٹر پر کرنا زیادہ آسان رہتا ہے۔",
      },
      {
        question: "میری ویب سائٹ Google پر کب نظر آئے گی؟",
        answer: "اس کا کوئی مقررہ وقت نہیں۔ Google Search Console میں ویب سائٹ شامل کریں اور sitemap جمع کرائیں۔ Google کے مطابق sitemap جمع کرانا ایک اشارہ ہے، ضمانت نہیں، اس لیے اچھا اور مفید مواد سب سے اہم ہے۔",
      },
    ],
    related: [
      "websites/how-to-build-a-website",
      "seo/what-is-seo",
      "seo/how-to-get-website-on-google",
      "seo/free-seo-course",
      "websites/domain-vs-hosting",
    ],
    sources: [
      { label: "GitHub Docs: Quickstart for repositories (checked 8 Oct 2026)", url: "https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories" },
      { label: "GitHub Docs: Creating new files (checked 8 Oct 2026)", url: "https://docs.github.com/en/repositories/working-with-files/managing-files/creating-new-files" },
      { label: "GitHub Docs: Adding a file to a repository (checked 8 Oct 2026)", url: "https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository" },
      { label: "Vercel Docs: Deploying Git repositories with Vercel (checked 8 Oct 2026)", url: "https://vercel.com/docs/git" },
      { label: "Vercel Docs: Adding & configuring a custom domain (checked 8 Oct 2026)", url: "https://vercel.com/docs/domains/working-with-domains/add-a-domain" },
      { label: "Vercel Docs: Hobby plan (checked 8 Oct 2026)", url: "https://vercel.com/docs/plans/hobby" },
      { label: "PKNIC: .PK registry, domain pricing (checked 8 Oct 2026)", url: "https://pknic.net.pk/" },
      { label: "Google Search Central: Build and submit a sitemap (checked 8 Oct 2026)", url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap" },
    ],
    next: { href: "/learn/seo/what-is-seo", label: "اگلی گائیڈ: SEO کیا ہے؟ (انگریزی)" },
  },
];
