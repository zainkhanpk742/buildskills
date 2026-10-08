import type { Guide } from "@/data/site";

/**
 * Pakistan-focused and Urdu guides (checked 8 October 2026). Urdu guides are
 * shown right-to-left with lang="ur" and are paired with their English guide
 * through `alternate` (hreflang). Every number has a dated official source.
 */
export const FREELANCE_UR = "freelancing/freelancing-kaise-shuru-karein-urdu";
export const FREELANCE_PK = "freelancing/how-to-start-freelancing-in-pakistan";
export const APP_UR = "mobile-apps/mobile-app-kaise-banaye-urdu";
export const SEO_UR = "seo/seo-kya-hai-urdu";

const D = "2026-10-08";

const src = {
  pseb: { label: "PSEB: Freelancer registration (checked 8 Oct 2026)", url: "https://techdestination.com/freelancer-registration/" },
  sbp: { label: "State Bank of Pakistan: BPRD Circular No. 05 of 2023, Framework for Freelancers Accounts", url: "https://www.sbp.org.pk/bprd/2023/C5.htm" },
  sbpNews: { label: "The News: SBP moves to facilitate IT exporters, freelancers (24 Oct 2023)", url: "https://www.thenews.com.pk/print/1122250-sbp-moves-to-facilitate-it-exporters-freelancers" },
  payoneer: { label: "Payoneer: How to open a Payoneer individual account in Pakistan (checked 8 Oct 2026)", url: "https://www.payoneer.com/resources/country-guides/payoneer-individual-account-in-pakistan/" },
  payoneerBank: { label: "Payoneer Help: Withdraw to bank FAQ (checked 8 Oct 2026)", url: "https://payoneer.custhelp.com/app/answers/detail/a_id/18605" },
  fiverrMinor: { label: "Fiverr Help: Navigating Fiverr as a minor (checked 2 Oct 2026)", url: "https://help.fiverr.com/hc/en-us/articles/32567580782609-Navigating-Fiverr-as-a-minor-How-to-stay-safe-and-compliant" },
  upworkAge: { label: "Upwork Help: Who's eligible to join and use Upwork (checked 2 Oct 2026)", url: "https://support.upwork.com/hc/en-us/articles/211067778-Who-s-eligible-to-join-and-use-Upwork" },
  play: { label: "Google Play Console Help: Get started with Play Console (checked 8 Oct 2026)", url: "https://support.google.com/googleplay/android-developer/answer/6112435" },
  apple: { label: "Apple Developer: Program enrollment (checked 8 Oct 2026)", url: "https://developer.apple.com/support/enrollment/" },
  appInventor: { label: "MIT App Inventor (checked 8 Oct 2026)", url: "https://appinventor.mit.edu/" },
  androidStudio: { label: "Android Developers: Android Studio (checked 8 Oct 2026)", url: "https://developer.android.com/studio" },
  howSearch: { label: "Google Search Central: In-depth guide to how Google Search works", url: "https://developers.google.com/search/docs/fundamentals/how-search-works" },
  starter: { label: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
  doINeedSeo: { label: "Google Search Central: Do you need an SEO? (no one can guarantee a #1 ranking)", url: "https://developers.google.com/search/docs/fundamentals/do-i-need-seo" },
  spam: { label: "Google Search Central: Spam policies (link spam)", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
  recrawl: { label: "Google Search Central: Ask Google to recrawl your URLs (checked 8 Oct 2026)", url: "https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl" },
};

/** English guides that have an Urdu version (hreflang pair). */
export const englishAlternates: Record<string, NonNullable<Guide["alternate"]>> = {
  "freelancing/how-to-start-freelancing": { href: `/learn/${FREELANCE_UR}`, hreflang: "ur", label: "اردو میں پڑھیں (Urdu mein parhein)" },
  "mobile-apps/how-to-build-a-mobile-app": { href: `/learn/${APP_UR}`, hreflang: "ur", label: "اردو میں پڑھیں (Urdu mein parhein)" },
  "seo/what-is-seo": { href: `/learn/${SEO_UR}`, hreflang: "ur", label: "اردو میں پڑھیں (Urdu mein parhein)" },
};

/** Extra "Related guides" links from existing English guides to the new pages. */
export const pakistanRelatedAdds: Record<string, string[]> = {
  "freelancing/how-to-start-freelancing": [FREELANCE_PK, FREELANCE_UR],
  "freelancing/how-to-make-money-online": [FREELANCE_PK],
  "high-demand-skills-pakistan/high-demand-skills-in-pakistan": [FREELANCE_PK],
  "mobile-apps/how-to-build-a-mobile-app": [APP_UR],
  "seo/what-is-seo": [SEO_UR],
  "seo/how-to-get-website-on-google": [SEO_UR],
};

export const pakistanGuides: Guide[] = [
  // ------------------------------------------------------------ Freelancing (Urdu)
  {
    slug: FREELANCE_UR,
    lang: "ur",
    alternate: { href: "/learn/freelancing/how-to-start-freelancing", hreflang: "en", label: "Read in English" },
    area: "Freelancing",
    title: "فری لانسنگ کیسے شروع کریں (اردو گائیڈ)",
    h1: "فری لانسنگ کیسے شروع کریں: پاکستان کے لیے اردو گائیڈ",
    summary:
      "ایک ایسی skill چنیں جس کے لیے لوگ پیسے دیتے ہیں، اس کے تین اصلی نمونے (samples) بنائیں، ایک واضح آفر لکھیں اور پہلا کلائنٹ ڈھونڈیں۔ پاکستان میں پیسے وصول کرنے کے لیے Payoneer یا فری لانسر بینک اکاؤنٹ پہلے سے تیار رکھیں۔",
    checkedDate: D,
    difficulty: "Beginner",
    topics: ["فری لانسنگ", "Fiverr", "Upwork", "Payoneer", "PSEB", "پاکستان"],
    paragraphs: [],
    sections: [
      {
        heading: "فری لانسنگ کیا ہے؟",
        paragraphs: [
          "فری لانسنگ کا مطلب ہے کسی ایک کمپنی کی نوکری کے بجائے مختلف کلائنٹس کے لیے کام کر کے پیسے کمانا۔ کلائنٹ پاکستان میں بھی ہو سکتے ہیں اور باہر کے ممالک میں بھی۔ کام عموماً آن لائن ہوتا ہے: لکھنا، ڈیزائن، ویڈیو ایڈیٹنگ، ویب سائٹ بنانا، SEO، ڈیٹا انٹری یا سوشل میڈیا سنبھالنا۔",
          "فری لانسنگ کوئی جلد امیر بننے کا طریقہ نہیں۔ شروع میں کام کم ملتا ہے اور سیکھنے میں وقت لگتا ہے۔ جو لوگ ایک skill پر توجہ دیتے ہیں، اچھا کام دکھاتے ہیں اور کلائنٹ سے وقت پر رابطہ رکھتے ہیں، وہ آہستہ آہستہ آگے بڑھتے ہیں۔",
        ],
        tip: "جو بھی شخص یہ وعدہ کرے کہ «فیس دو، ایک مہینے میں ڈالر کماؤ»، اس سے ہوشیار رہیں۔ کوئی بھی اصلی کمائی کی ضمانت نہیں دے سکتا۔",
      },
      {
        heading: "مرحلہ 1: ایک skill چنیں",
        paragraphs: [
          "ایسی skill چنیں جو آپ کو تھوڑی بہت آتی ہو یا جسے آپ تین سے چھ مہینے میں سیکھ سکیں، اور جس کے لیے لوگ واقعی پیسے دیتے ہوں۔ ایک وقت میں صرف ایک skill پر کام کریں۔",
        ],
        bullets: [
          "لکھنا: بلاگ پوسٹس، پروڈکٹ کی تفصیل، انگریزی یا اردو میں مواد۔",
          "ڈیزائن: لوگو، سوشل میڈیا پوسٹس، YouTube thumbnails (Canva سے شروع کیا جا سکتا ہے)۔",
          "ویڈیو ایڈیٹنگ: Reels، Shorts اور TikTok کے لیے مختصر ویڈیوز۔",
          "ویب سائٹ بنانا: چھوٹے کاروباروں کے لیے سادہ ویب سائٹس۔",
          "SEO اور ڈیجیٹل مارکیٹنگ: ویب سائٹس کو Google پر بہتر بنانا۔",
        ],
        tip: "BuildSkills پر ہر skill کی مفت گائیڈز موجود ہیں۔ پہلے ایک گائیڈ مکمل کریں، پھر اسی skill میں پریکٹس پراجیکٹ بنائیں۔",
      },
      {
        heading: "مرحلہ 2: تین اصلی نمونے (portfolio) بنائیں",
        paragraphs: [
          "کلائنٹ آپ کی ڈگری سے زیادہ آپ کا کام دیکھتا ہے۔ اگر ابھی کوئی کلائنٹ نہیں تو خود سے تین پراجیکٹ بنائیں جو اصلی کام جیسے ہوں۔ مثلاً ایک فرضی بیکری کا لوگو، ایک دکان کے لیے ایک صفحے کی ویب سائٹ، یا کسی کی اجازت سے اس کی ویڈیو ایڈٹ کرنا۔",
          "نمونے ایک جگہ رکھیں: ایک سادہ ویب سائٹ، Google Drive کا فولڈر یا Behance جیسا پلیٹ فارم۔ کسی اور کا کام اپنا بنا کر کبھی نہ دکھائیں۔",
        ],
        tip: "ہر نمونے کے ساتھ دو لائنیں لکھیں: مسئلہ کیا تھا اور آپ نے کیا حل دیا۔ اس سے کلائنٹ کو آپ کی سوچ سمجھ آتی ہے۔",
      },
      {
        heading: "مرحلہ 3: واضح آفر لکھیں اور پلیٹ فارم چنیں",
        paragraphs: [
          "«میں ہر کام کرتا ہوں» کے بجائے ایک واضح آفر لکھیں، جیسے «میں آپ کی 60 سیکنڈ کی ویڈیو کو captions کے ساتھ 3 دن میں ایڈٹ کروں گا»۔ کلائنٹ کو پتہ ہونا چاہیے کہ اسے کیا ملے گا، کب ملے گا اور کتنی بار تبدیلی ہو سکتی ہے۔",
          "کلائنٹ ڈھونڈنے کے کئی راستے ہیں: Fiverr، Upwork، LinkedIn، فیس بک گروپس، یا اپنے شہر کے کاروبار۔ ہر پلیٹ فارم کی عمر کی شرط اور فیس الگ ہے۔ Fiverr کے مطابق اکاؤنٹ کے لیے 18 سال یا قانونی طور پر معاہدہ کرنے کا اہل ہونا ضروری ہے، اور Upwork کے لیے 18 سال یا آپ کے ملک میں بالغ ہونے کی عمر، جو بھی زیادہ ہو (2 اکتوبر 2026 کو چیک کیا گیا)۔",
        ],
        tip: "پلیٹ فارم پر صرف اپنی اصلی معلومات اور شناخت استعمال کریں۔ کسی اور کا اکاؤنٹ خریدنا یا کرائے پر لینا اکاؤنٹ بند ہونے کی بڑی وجہ ہے۔",
      },
      {
        heading: "مرحلہ 4: پہلا کلائنٹ کیسے ڈھونڈیں",
        paragraphs: [
          "پہلا کلائنٹ سب سے مشکل ہوتا ہے۔ صرف ایک پلیٹ فارم پر انتظار کرنے کے بجائے ہر ہفتے چند لوگوں سے براہِ راست رابطہ کریں۔",
        ],
        steps: [
          "ایسے دس کاروبار یا لوگ چنیں جنہیں آپ کی skill کی ضرورت ہو، مثلاً ایسی دکانیں جن کی فیس بک پوسٹس اچھی نہیں۔",
          "ہر ایک کو مختصر اور ذاتی پیغام بھیجیں: ان کے کام کی ایک بات، آپ کی ایک چھوٹی تجویز، اور آپ کے نمونے کا لنک۔",
          "پہلے چھوٹا کام قبول کریں، اسے وقت پر اور اچھے طریقے سے مکمل کریں، اور پھر review یا recommendation مانگیں۔",
          "ایک ہی پیغام سب کو copy paste نہ کریں، اور جواب نہ آئے تو صرف ایک بار شائستگی سے یاد دہانی کرائیں۔",
        ],
      },
      {
        heading: "مرحلہ 5: پاکستان میں پیسے کیسے وصول کریں",
        paragraphs: [
          "کام شروع کرنے سے پہلے پیسے وصول کرنے کا طریقہ تیار رکھیں، تاکہ پہلی کمائی پھنس نہ جائے۔",
        ],
        bullets: [
          "Payoneer: Upwork اور Fiverr جیسے پلیٹ فارمز سے جڑتا ہے اور پیسے پاکستانی بینک اکاؤنٹ میں نکالے جا سکتے ہیں۔ Payoneer کے مطابق بینک اکاؤنٹ اسی نام پر ہونا چاہیے جو Payoneer اکاؤنٹ پر ہے، اور نیا بینک اکاؤنٹ منظور ہونے میں عموماً 3 کاروباری دن تک لگتے ہیں (8 اکتوبر 2026 کو چیک کیا گیا)۔",
          "فری لانسر بینک اکاؤنٹ: State Bank of Pakistan کے اکتوبر 2023 کے Framework for Freelancers Accounts کے تحت بینک فری لانسرز کا اکاؤنٹ برانچ میں یا آن لائن کھول سکتے ہیں، اور روپے کے اکاؤنٹ کے ساتھ ایک فارن کرنسی اکاؤنٹ (ESFCA) بھی کھلتا ہے۔ SBP کے اعلان کے مطابق فری لانسر اپنی کمائی کا 50% یا ماہانہ 5,000 امریکی ڈالر، جو بھی زیادہ ہو، اس فارن کرنسی اکاؤنٹ میں رکھ سکتے ہیں۔",
          "براہِ راست بینک ٹرانسفر: کچھ کلائنٹ سیدھا بینک میں پیسے بھیجتے ہیں۔ اپنے بینک سے پوچھیں کہ کلائنٹ کو کون سی تفصیلات دینی ہیں، جیسے IBAN اور SWIFT code۔",
        ],
        tip: "کبھی کسی کو اپنا پاس ورڈ یا OTP نہ دیں، اور ایسے «ایجنٹ» سے بچیں جو آپ کے نام پر اکاؤنٹ کھول کر پیسے نکالنے کی پیشکش کرے۔",
      },
      {
        heading: "مرحلہ 6: PSEB رجسٹریشن (اختیاری مگر مفید)",
        paragraphs: [
          "Pakistan Software Export Board (PSEB) آئی ٹی اور آئی ٹی سے متعلق سروسز دینے والے فری لانسرز کو رجسٹر کرتا ہے۔ درخواست PSEB کے آن لائن پورٹل پر دی جاتی ہے۔ PSEB کی ویب سائٹ کے مطابق ضروری کاغذات یہ ہیں: ذاتی NTN (بغیر کاروباری نام کے)، CNIC کی دونوں طرف کی کاپی، اور ذاتی بینک اکاؤنٹ کا لیٹر یا سرٹیفکیٹ۔",
          "PSEB کی ویب سائٹ پر نئی رجسٹریشن کی فیس Rs 1,000 اور سالانہ renewal کی فیس Rs 2,000 درج ہے، اور ادائیگی کی تصدیق کے بعد سرٹیفکیٹ عموماً 2 سے 5 کاروباری دنوں میں ملتا ہے (8 اکتوبر 2026 کو چیک کیا گیا)۔ ٹیکس کے قوانین بدلتے رہتے ہیں، اس لیے اپنی صورتحال FBR یا کسی ٹیکس ماہر سے ضرور پوچھیں۔",
        ],
        tip: "رجسٹریشن کام شروع کرنے کے لیے ضروری نہیں۔ جب باقاعدہ باہر سے پیسے آنا شروع ہوں تو NTN اور PSEB رجسٹریشن پر غور کریں۔",
      },
      {
        heading: "عام غلطیاں",
        paragraphs: ["نئے فری لانسرز اکثر یہی غلطیاں کرتے ہیں:"],
        bullets: [
          "ایک ساتھ کئی skills سیکھنے کی کوشش کرنا اور کسی میں بھی ماہر نہ ہونا۔",
          "جعلی reviews خریدنا یا کسی اور کا portfolio دکھانا۔",
          "کلائنٹ سے پلیٹ فارم کے باہر ادائیگی لینا جب پلیٹ فارم کے قوانین اس کی اجازت نہ دیں۔",
          "پیسے وصول کرنے کا طریقہ تیار کیے بغیر کام شروع کر دینا۔",
          "ڈیڈ لائن کے بارے میں کلائنٹ کو وقت پر نہ بتانا۔ بجلی یا انٹرنیٹ کے مسئلے کے لیے backup کا انتظام رکھیں۔",
          "«فیس دو اور کام لو» والے گروپس اور کورسز پر بھروسہ کرنا۔",
        ],
      },
    ],
    faqs: [
      { question: "کیا بغیر تجربے کے فری لانسنگ شروع ہو سکتی ہے؟", answer: "جی ہاں۔ ایک skill چنیں، اس کے تین اصلی نمونے بنائیں اور چھوٹے کام سے شروع کریں۔ تجربہ کام کرتے کرتے بنتا ہے۔" },
      { question: "پاکستان میں فری لانسر پیسے کیسے وصول کرتے ہیں؟", answer: "عام طریقے یہ ہیں: Payoneer (اپنے نام کے پاکستانی بینک اکاؤنٹ میں رقم نکالنا)، SBP کے 2023 کے فریم ورک کے تحت فری لانسر بینک اکاؤنٹ، اور کلائنٹ کی طرف سے براہِ راست بینک ٹرانسفر۔" },
      { question: "کیا PSEB رجسٹریشن ضروری ہے؟", answer: "کام شروع کرنے کے لیے نہیں، مگر یہ بینکنگ اور آئی ٹی ایکسپورٹ آمدنی کے ٹیکس کے معاملات میں مدد کر سکتی ہے۔ 8 اکتوبر 2026 کو PSEB کی ویب سائٹ پر نئی رجسٹریشن کی فیس Rs 1,000 اور renewal کی Rs 2,000 سالانہ درج تھی۔" },
      { question: "کیا 18 سال سے کم عمر میں Fiverr استعمال کر سکتے ہیں؟", answer: "Fiverr کے مطابق 13 سے 17 سال کے بچے صرف والدین یا سرپرست کے اکاؤنٹ سے، ان کی نگرانی میں کام کر سکتے ہیں۔ Upwork پر 18 سال سے کم عمر کے لیے کوئی آپشن نہیں (2 اکتوبر 2026 کو چیک کیا گیا)۔" },
      { question: "پہلی کمائی میں کتنا وقت لگتا ہے؟", answer: "اس کا کوئی مقررہ وقت نہیں۔ یہ آپ کی skill، نمونوں اور روزانہ کی محنت پر منحصر ہے۔ جو شخص مقررہ مدت میں کمائی کی ضمانت دے، اس سے ہوشیار رہیں۔" },
    ],
    related: [
      "freelancing/how-to-start-freelancing",
      FREELANCE_PK,
      "freelancing/fiverr-for-beginners",
      "freelancing/freelancing-websites-for-beginners",
      "websites/website-banane-ka-tarika-urdu",
    ],
    sources: [src.fiverrMinor, src.upworkAge, src.payoneer, src.payoneerBank, src.sbp, src.sbpNews, src.pseb],
    next: { href: `/learn/${FREELANCE_PK}`, label: "How to start freelancing in Pakistan (انگریزی)" },
  },
  // ------------------------------------------------------------ Freelancing in Pakistan (English)
  {
    slug: FREELANCE_PK,
    area: "Freelancing",
    title: "How to start freelancing in Pakistan",
    h1: "How to start freelancing in Pakistan: skills, clients, payments and PSEB",
    summary:
      "Pick one paid skill, build three real samples, and win a first client through a marketplace or direct outreach. Set up payments first: Payoneer or a freelancer bank account under SBP's 2023 framework. Register with PSEB once foreign income is regular.",
    checkedDate: D,
    difficulty: "Beginner",
    topics: ["freelancing in Pakistan", "Payoneer", "PSEB", "freelancer bank account", "Fiverr", "Upwork"],
    paragraphs: [],
    sections: [
      {
        heading: "Step 1: Choose one skill clients already pay for",
        paragraphs: [
          "Freelancing from Pakistan works the same way as anywhere: clients pay for a result, not for a certificate. Choose one skill you can deliver well within a few months, such as writing, design, short-video editing, simple websites or SEO, and ignore the rest until you have paying work.",
          "Look at what is actually being bought. Browse service listings on Fiverr, job posts on Upwork and LinkedIn, and local businesses' social pages that clearly need help. If you can see people paying for it, it is a real skill to sell.",
        ],
      },
      {
        heading: "Step 2: Build proof, then a clear offer",
        paragraphs: [
          "Make three samples that look like real client work, and put them in one place: a simple portfolio site, a Drive folder or a Behance page. Then write one offer that a buyer can understand in seconds: what you deliver, how fast, and how many revisions.",
        ],
        bullets: [
          "Weak: \"I do all kinds of graphic design.\"",
          "Clear: \"I will design 10 branded Instagram posts from your photos in 4 days, with 2 revisions.\"",
        ],
      },
      {
        heading: "Step 3: Pick where to find clients (and check the age rules)",
        paragraphs: [
          "Marketplaces are optional. Many Pakistani freelancers find first clients on LinkedIn, in Facebook groups, or among local shops and clinics. If you use a marketplace, read its rules first. Fiverr requires you to be 18 or legally able to form a contract (13 to 17-year-olds only through a parent's or guardian's account), and Upwork requires 18 or the age of majority where you live, whichever is older (checked 2 October 2026).",
          "Use only your own identity and documents. Buying, renting or sharing accounts breaks platform rules and is a common reason accounts are closed with money still inside.",
        ],
      },
      {
        heading: "Step 4: Set up payments before your first order",
        paragraphs: [
          "Decide how money will reach you before you deliver any work.",
        ],
        bullets: [
          "Payoneer: connects with marketplaces such as Upwork and Fiverr and lets you withdraw to a local Pakistani bank account. Payoneer says the bank account must be in the same name as your Payoneer account, and approval of a new bank account usually takes up to 3 business days (checked 8 October 2026).",
          "Freelancer bank account: the State Bank of Pakistan's Framework for Freelancers Accounts (BPRD Circular No. 05, 23 October 2023) lets banks open freelancer accounts in person or digitally, with an Exporters' Special Foreign Currency Account (ESFCA) alongside the rupee account. SBP said freelancers can keep 50% of export proceeds, or US$5,000 a month, whichever is higher, in the foreign currency account.",
          "Direct bank transfer: some clients pay straight into your bank. Ask your bank for the details to share (such as IBAN and SWIFT code) and any documents they need for foreign remittances.",
        ],
      },
      {
        heading: "Step 5: Register with PSEB when income is regular",
        paragraphs: [
          "The Pakistan Software Export Board registers freelancers who provide IT and IT-enabled services. You apply online with scanned copies of your personal NTN (with no business name), both sides of your CNIC, and a personal bank account letter or certificate. After initial approval you pay the fee, and PSEB says the certificate is usually issued 2 to 5 working days after payment is verified.",
          "PSEB's site lists Rs 1,000 for a new freelancer registration and Rs 2,000 a year for renewal (checked 8 October 2026). Registration can help with bank compliance and the tax treatment of IT export income, but tax rules change; confirm your own position with FBR or a tax adviser.",
        ],
      },
      {
        heading: "Step 6: Work like a professional",
        paragraphs: [
          "Reliability is what turns one order into repeat work. Confirm the brief in writing, share progress early, and deliver on time. Plan for power or internet cuts with a backup (a charged laptop, a mobile hotspot, or a nearby place to work), and tell the client early if a deadline is at risk.",
        ],
      },
      {
        heading: "Scams to avoid",
        paragraphs: ["Most problems for new freelancers in Pakistan come from a few repeated tricks."],
        bullets: [
          "\"Pay a fee and we will give you work\" groups, or courses that promise guaranteed dollar income.",
          "Requests to share your OTP, password or bank login, or to let someone else use your account.",
          "Clients who overpay by cheque or transfer and ask you to send the difference back.",
          "Agents offering to open a marketplace or Payoneer account in your name for a fee.",
        ],
      },
    ],
    faqs: [
      { question: "How do I start freelancing in Pakistan with no experience?", answer: "Choose one skill, make three realistic samples, write a clear offer, and contact a few potential clients every week. Take small jobs first and ask for reviews." },
      { question: "Which payment method is best for freelancers in Pakistan?", answer: "It depends on your platform and clients. Payoneer works with marketplaces such as Upwork and Fiverr and withdraws to a Pakistani bank account in your name; a freelancer bank account under SBP's 2023 framework suits direct foreign clients." },
      { question: "What documents do I need for PSEB freelancer registration?", answer: "PSEB lists a personal NTN (with no business name), both sides of your CNIC, and a personal bank account letter or certificate (checked 8 October 2026)." },
      { question: "How much is the PSEB freelancer registration fee?", answer: "PSEB's site lists Rs 1,000 for new freelancers and Rs 2,000 a year for renewal, paid through its portal gateway or by pay order or demand draft (checked 8 October 2026)." },
    ],
    related: [
      "freelancing/how-to-start-freelancing",
      FREELANCE_UR,
      "freelancing/fiverr-for-beginners",
      "high-demand-skills-pakistan/high-demand-skills-in-pakistan",
      "freelancing/how-to-make-money-online",
    ],
    sources: [src.payoneer, src.payoneerBank, src.sbp, src.sbpNews, src.pseb, src.fiverrMinor, src.upworkAge],
    next: { href: "/learn/freelancing/fiverr-for-beginners", label: "Fiverr for beginners" },
  },
  // ------------------------------------------------------------ Mobile app (Urdu)
  {
    slug: APP_UR,
    lang: "ur",
    alternate: { href: "/learn/mobile-apps/how-to-build-a-mobile-app", hreflang: "en", label: "Read in English" },
    area: "Mobile Apps",
    title: "موبائل ایپ کیسے بنائیں (اردو گائیڈ)",
    h1: "موبائل ایپ کیسے بنائیں: کوڈنگ کے ساتھ اور بغیر، اردو گائیڈ",
    summary:
      "پہلے ایپ کا مسئلہ اور اسکرینز کاغذ پر طے کریں۔ پھر بغیر کوڈنگ کے MIT App Inventor جیسے ٹول یا کوڈنگ کے لیے Android Studio استعمال کریں، اصلی فون پر ٹیسٹ کریں، اور آخر میں Google Play یا App Store پر شائع کریں۔",
    checkedDate: D,
    difficulty: "Beginner",
    topics: ["موبائل ایپ", "Android", "iPhone", "Google Play", "App Store", "no-code"],
    paragraphs: [],
    sections: [
      {
        heading: "شروع کرنے سے پہلے",
        paragraphs: [
          "موبائل ایپ بنانا اب پہلے سے آسان ہے۔ آپ بغیر کوڈنگ کے بھی سادہ ایپ بنا سکتے ہیں، اور AI ٹولز جیسے ChatGPT، Grok یا Cursor کوڈ لکھنے اور غلطیاں سمجھنے میں مدد کرتے ہیں۔ مگر سب سے اہم بات ٹول نہیں، بلکہ یہ ہے کہ ایپ کس مسئلے کو حل کرتی ہے۔",
          "اگر آپ کا کام ایک ویب سائٹ سے ہو سکتا ہے تو پہلے ویب سائٹ بنائیں؛ یہ سستی اور جلدی بنتی ہے۔ ایپ تب بنائیں جب لوگوں کو اسے بار بار فون پر استعمال کرنا ہو۔",
        ],
      },
      {
        heading: "مرحلہ 1: مسئلہ اور اسکرینز طے کریں",
        paragraphs: [
          "ایک جملے میں لکھیں کہ ایپ کس کے لیے ہے اور کیا کرتی ہے۔ مثلاً: «طلبہ کے لیے روزانہ کا ٹائم ٹیبل اور یاد دہانی»۔ پھر پہلے ورژن کی تین سے پانچ اسکرینز کاغذ پر بنائیں: کون سا بٹن کہاں ہے اور دبانے سے کیا ہوتا ہے۔",
        ],
        tip: "پہلے ورژن میں login، payment اور chat جیسے مشکل فیچرز نہ رکھیں۔ چھوٹی ایپ مکمل ہو جائے تو یہ بعد میں شامل کریں۔",
      },
      {
        heading: "مرحلہ 2: Android، iPhone یا دونوں؟",
        paragraphs: [
          "Android ایپ Windows، Linux یا Mac کسی بھی کمپیوٹر پر بنائی اور ٹیسٹ کی جا سکتی ہے۔ iPhone ایپ Apple کے ٹول Xcode سے بنانے کے لیے Mac ضروری ہے۔ اگر آپ کے پاس Mac نہیں تو Android سے شروع کرنا آسان ہے۔",
        ],
      },
      {
        heading: "مرحلہ 3 (راستہ A): بغیر کوڈنگ کے ایپ بنائیں",
        paragraphs: [
          "MIT App Inventor ایک مفت ٹول ہے جو براؤزر میں چلتا ہے۔ اس میں آپ کوڈ لکھنے کے بجائے بلاکس جوڑ کر Android ایپ بناتے ہیں۔ یہ سیکھنے اور سادہ ایپس کے لیے بہترین ہے۔ Thunkable اور FlutterFlow جیسے دوسرے ٹولز کے بھی محدود مفت پلان ہیں، مگر ان کے پلان بدلتے رہتے ہیں، اس لیے پیسے دینے سے پہلے ان کا موجودہ pricing صفحہ دیکھیں۔",
        ],
        steps: [
          "appinventor.mit.edu پر جا کر Google اکاؤنٹ سے لاگ اِن کریں اور نیا project بنائیں۔",
          "Designer میں بٹن، ٹیکسٹ اور تصاویر اسکرین پر رکھیں۔",
          "Blocks میں بتائیں کہ بٹن دبانے پر کیا ہو۔",
          "اپنے Android فون پر ایپ چلا کر ٹیسٹ کریں اور غلطیاں ٹھیک کریں۔",
        ],
        tip: "بغیر کوڈنگ والا ورژن بنانا وقت ضائع نہیں۔ اگر بعد میں developer رکھیں تو آپ اسے بالکل صحیح بتا سکیں گے کہ کیا بنانا ہے۔",
      },
      {
        heading: "مرحلہ 3 (راستہ B): کوڈنگ کے ساتھ ایپ بنائیں",
        paragraphs: [
          "Android ایپس کے لیے Google کا مفت ٹول Android Studio ہے، اور iPhone ایپس کے لیے Apple کا Xcode۔ اگر آپ کوڈنگ نہیں جانتے تو AI سے مدد لیں، مگر جو کوڈ ملے اسے سمجھنے کی کوشش کریں اور تھوڑا تھوڑا کر کے چلائیں۔",
        ],
        examples: [
          {
            label: "AI کے لیے prompt (کاپی کریں)",
            text: "میں Android Studio میں اپنی پہلی ایپ بنا رہا ہوں۔ مجھے Kotlin میں ایک سادہ ایپ کا کوڈ دو جس میں ایک اسکرین ہو: اوپر عنوان، نیچے ایک ٹیکسٹ باکس جس میں کام لکھا جائے، ایک «شامل کریں» بٹن، اور کاموں کی فہرست۔ ہر فائل کا نام اور جگہ بتاؤ، اور مرحلہ وار سمجھاؤ کہ ایپ کو اپنے فون پر کیسے چلاؤں۔",
          },
        ],
        tip: "error آئے تو پورا error message کاپی کر کے AI کو دیں اور پوچھیں کہ اس کا مطلب کیا ہے۔ اندازے سے کوڈ نہ بدلیں۔",
      },
      {
        heading: "مرحلہ 4: اصلی لوگوں سے ٹیسٹ کروائیں",
        paragraphs: [
          "ایپ کو کم از کم پانچ لوگوں کو استعمال کرنے دیں اور خاموشی سے دیکھیں کہ وہ کہاں رکتے ہیں۔ پرانے یا سستے فون پر اور کمزور انٹرنیٹ پر بھی ٹیسٹ کریں، کیونکہ آپ کے سب صارفین کے پاس نیا فون نہیں ہوگا۔",
        ],
      },
      {
        heading: "مرحلہ 5: Google Play یا App Store پر شائع کریں",
        paragraphs: [
          "Google Play: Play Console کا developer اکاؤنٹ بنانے کے لیے ایک بار US$25 کی فیس ہے اور عمر کم از کم 18 سال ہونی چاہیے۔ فیس کریڈٹ یا ڈیبٹ کارڈ سے دی جاتی ہے؛ prepaid کارڈ قبول نہیں ہوتے۔ 13 نومبر 2023 کے بعد بننے والے personal اکاؤنٹس کو ایپ شائع کرنے سے پہلے کچھ testing شرائط پوری کرنی ہوتی ہیں، اور Google شناختی کارڈ اور آپ کے نام کا کارڈ مانگ سکتا ہے (8 اکتوبر 2026 کو چیک کیا گیا)۔",
          "App Store: Apple Developer Program کی فیس US$99 سالانہ ہے (جہاں ممکن ہو مقامی کرنسی میں)۔ سیکھنے اور اپنے فون پر ٹیسٹ کرنے کے لیے فیس ضروری نہیں؛ مفت Apple Account سے Xcode استعمال ہو سکتا ہے (8 اکتوبر 2026 کو چیک کیا گیا)۔",
          "شائع کرنے سے پہلے اپنے بینک سے تصدیق کر لیں کہ آپ کا کارڈ بین الاقوامی آن لائن ادائیگی کی اجازت دیتا ہے۔ ایپ کے ساتھ اچھے screenshots، سچی تفصیل اور privacy policy بھی تیار رکھیں۔",
        ],
      },
      {
        heading: "عام غلطیاں",
        paragraphs: ["پہلی ایپ بناتے وقت یہ غلطیاں عام ہیں:"],
        bullets: [
          "پہلے ہی ورژن میں بہت زیادہ فیچرز ڈال دینا۔",
          "صرف اپنے نئے فون پر ٹیسٹ کرنا۔",
          "دوسروں کی تصاویر، آئیکن یا ڈیزائن بغیر اجازت استعمال کرنا۔",
          "privacy policy کے بغیر ایپ شائع کرنے کی کوشش کرنا۔",
          "AI کا کوڈ سمجھے بغیر لگاتے جانا، جس سے بعد میں غلطی ڈھونڈنا مشکل ہو جاتا ہے۔",
        ],
      },
    ],
    faqs: [
      { question: "کیا موبائل ایپ مفت بن سکتی ہے؟", answer: "بنانا اور ٹیسٹ کرنا مفت ہو سکتا ہے، جیسے MIT App Inventor، Android Studio یا Xcode سے۔ شائع کرنے کی فیس ہے: Google Play ایک بار US$25 اور Apple سالانہ US$99 (8 اکتوبر 2026 کو چیک کیا گیا)۔" },
      { question: "کیا بغیر کوڈنگ کے ایپ بن سکتی ہے؟", answer: "جی ہاں، سادہ ایپس کے لیے۔ MIT App Inventor مفت ہے اور بلاکس جوڑ کر Android ایپ بناتا ہے۔ مشکل فیچرز کے لیے بعد میں کوڈ یا developer کی ضرورت پڑ سکتی ہے۔" },
      { question: "کیا iPhone ایپ کے لیے Mac ضروری ہے؟", answer: "Apple کے ٹول Xcode سے بنانے کے لیے جی ہاں۔ کچھ no-code ٹولز Mac کے بغیر بھی iOS ایپ بناتے ہیں، مگر App Store پر شائع کرنے کے لیے Apple Developer Program کی ممبرشپ پھر بھی چاہیے۔" },
      { question: "پاکستان سے Google Play پر ایپ کیسے شائع کریں؟", answer: "Play Console پر developer اکاؤنٹ بنائیں، US$25 کی ایک بار کی فیس ایسے کریڈٹ یا ڈیبٹ کارڈ سے دیں جو بین الاقوامی ادائیگی کی اجازت دیتا ہو، شناخت کی تصدیق کریں اور testing شرائط پوری کریں۔" },
    ],
    related: [
      "mobile-apps/how-to-build-a-mobile-app",
      "mobile-apps/do-i-need-an-app",
      "websites/website-banane-ka-tarika-urdu",
      "websites/website-vs-web-app",
    ],
    sources: [src.appInventor, src.androidStudio, src.play, src.apple],
    next: { href: "/learn/mobile-apps/do-i-need-an-app", label: "کیا مجھے ایپ کی ضرورت ہے؟ (انگریزی)" },
  },
  // ------------------------------------------------------------ SEO (Urdu)
  {
    slug: SEO_UR,
    lang: "ur",
    alternate: { href: "/learn/seo/what-is-seo", hreflang: "en", label: "Read in English" },
    area: "SEO",
    title: "SEO کیا ہے؟ (اردو گائیڈ)",
    h1: "SEO کیا ہے؟ آسان اردو میں مکمل وضاحت",
    summary:
      "SEO (Search Engine Optimization) کا مطلب ہے اپنی ویب سائٹ کو اس طرح بہتر بنانا کہ Google اسے سمجھ سکے اور صحیح لوگوں کو تلاش کے نتائج میں دکھا سکے۔ اس میں مفید مواد، واضح صفحات، تکنیکی صفائی اور دوسری ویب سائٹس کے لنکس شامل ہیں۔ Google کے عام نتائج میں آنے کے لیے پیسے نہیں دینے پڑتے۔",
    checkedDate: D,
    difficulty: "Beginner",
    topics: ["SEO", "Google", "Search Console", "keywords", "اردو"],
    paragraphs: [],
    sections: [
      {
        heading: "SEO کیا ہے؟",
        paragraphs: [
          "جب کوئی Google پر کچھ تلاش کرتا ہے، جیسے «لاہور میں ٹیوشن اکیڈمی»، تو Google لاکھوں صفحات میں سے وہ صفحات دکھاتا ہے جو اس کے خیال میں سب سے مفید ہیں۔ SEO وہ کام ہے جو آپ اپنی ویب سائٹ پر کرتے ہیں تاکہ Google آپ کے صفحے کو سمجھ سکے اور صحیح تلاش پر اسے دکھائے۔",
          "SEO کا مقصد Google کو دھوکا دینا نہیں، بلکہ لوگوں کے سوال کا بہترین جواب دینا اور اسے Google کے لیے واضح بنانا ہے۔ Google کے عام (organic) نتائج میں آنا مفت ہے؛ Google Ads الگ اور پیڈ سروس ہے۔",
        ],
      },
      {
        heading: "Google کیسے کام کرتا ہے: تین مراحل",
        paragraphs: [
          "Google کی اپنی دستاویزات کے مطابق Search تین مراحل میں کام کرتا ہے:",
        ],
        steps: [
          "Crawling: Google کے پروگرام انٹرنیٹ پر صفحات ڈھونڈتے اور پڑھتے ہیں، زیادہ تر ایک صفحے سے دوسرے صفحے کے لنکس کے ذریعے۔",
          "Indexing: Google صفحے کا متن، تصاویر اور معلومات سمجھ کر اپنے بڑے ڈیٹا بیس (index) میں محفوظ کرتا ہے۔",
          "Serving: جب کوئی تلاش کرتا ہے تو Google index میں سے سب سے متعلقہ صفحات منتخب کر کے نتائج میں دکھاتا ہے۔",
        ],
        tip: "Google ہر صفحے کو crawl یا index کرنے کی ضمانت نہیں دیتا۔ اسی لیے صفحات کو آپس میں لنک کرنا اور sitemap دینا مفید ہے۔",
      },
      {
        heading: "SEO کی تین بنیادی قسمیں",
        paragraphs: [
          "آسانی کے لیے SEO کو تین حصوں میں دیکھا جاتا ہے:",
        ],
        bullets: [
          "On-page SEO: صفحے کے اندر کا کام: واضح title، اچھی heading، مفید اور اصلی مواد، اور تصاویر کا alt text۔",
          "Technical SEO: ویب سائٹ کی تکنیکی صحت: صفحات کا تیزی سے کھلنا، موبائل پر ٹھیک دکھنا، sitemap، اور ایسی غلطیاں نہ ہونا جو Google کو روکیں۔",
          "Off-page SEO: ویب سائٹ کے باہر کا کام، خاص طور پر دوسری اچھی ویب سائٹس کا آپ کو لنک کرنا۔ لنکس خریدنا Google کی پالیسی کے خلاف ہے۔",
        ],
      },
      {
        heading: "Keywords کیا ہیں اور کیسے چنیں؟",
        paragraphs: [
          "Keyword وہ الفاظ ہیں جو لوگ Google پر لکھتے ہیں۔ نئی ویب سائٹ کے لیے مختصر اور عام الفاظ (جیسے «SEO») پر آنا بہت مشکل ہے۔ اس کے بجائے لمبے اور واضح سوالات (long-tail) چنیں، جیسے «پاکستان میں ویب سائٹ کیسے بنائیں»۔ ان پر مقابلہ کم ہوتا ہے اور تلاش کرنے والے کو بالکل وہی چاہیے ہوتا ہے جو آپ لکھتے ہیں۔",
          "ہر صفحے کا ایک بنیادی سوال رکھیں اور اسی کا مکمل جواب دیں۔ ایک ہی بات کے لیے کئی ملتے جلتے صفحات نہ بنائیں۔",
        ],
        tip: "Google کے سرچ باکس میں اپنا موضوع لکھیں اور نیچے آنے والی تجاویز اور «People also ask» کے سوالات دیکھیں۔ یہ لوگوں کے اصل سوالات ہیں۔",
      },
      {
        heading: "اپنی ویب سائٹ کا SEO کیسے شروع کریں",
        paragraphs: ["یہ پانچ قدم کسی بھی نئی ویب سائٹ کے لیے بنیاد ہیں:"],
        steps: [
          "ویب سائٹ کو Google Search Console میں شامل کریں اور ملکیت کی تصدیق کریں۔",
          "Sitemap جمع کرائیں تاکہ Google کو آپ کے تمام صفحات کا پتہ چلے۔",
          "ہر صفحے کا title اور description واضح لکھیں، جس میں صفحے کا موضوع صاف نظر آئے۔",
          "ایسا مواد لکھیں جو کسی کے سوال کا مکمل اور سچا جواب دے، اپنے تجربے اور مثالوں کے ساتھ۔",
          "نئے صفحات کو پرانے صفحات سے لنک کریں تاکہ Google اور قارئین انہیں آسانی سے ڈھونڈ سکیں۔",
        ],
      },
      {
        heading: "SEO کے نتائج میں کتنا وقت لگتا ہے؟",
        paragraphs: [
          "SEO فوری نتیجہ نہیں دیتا۔ Google کے مطابق صفحے کے crawl ہونے میں چند دن سے چند ہفتے لگ سکتے ہیں، اور indexing کی درخواست دینے سے بھی جلد یا لازمی طور پر نتائج میں آنے کی ضمانت نہیں ملتی (8 اکتوبر 2026 کو چیک کیا گیا)۔ رینکنگ بہتر ہونے میں عموماً اس سے بھی زیادہ وقت لگتا ہے، اس لیے مستقل مزاجی سے اچھا مواد شامل کرتے رہیں۔",
        ],
        tip: "جو کوئی «ایک ہفتے میں Google پر پہلا نمبر» کی ضمانت دے، اس سے بچیں۔ Google خود کہتا ہے کہ کوئی رینکنگ کی ضمانت نہیں دے سکتا۔",
      },
      {
        heading: "عام غلطیاں",
        paragraphs: ["نئی ویب سائٹس اکثر ان غلطیوں کی وجہ سے Google پر نہیں آتیں:"],
        bullets: [
          "دوسری ویب سائٹس کا مواد کاپی کرنا۔",
          "ایک ہی keyword کو بار بار غیر فطری طریقے سے دہرانا۔",
          "پیسے دے کر لنکس یا جعلی ٹریفک خریدنا۔",
          "غلطی سے صفحات پر noindex لگا رہنے دینا۔",
          "Search Console استعمال نہ کرنا، جس سے مسائل کا پتہ ہی نہیں چلتا۔",
        ],
      },
    ],
    faqs: [
      { question: "SEO کا مطلب کیا ہے؟", answer: "SEO کا مطلب Search Engine Optimization ہے: اپنی ویب سائٹ کو اس طرح بہتر بنانا کہ Google اسے سمجھے اور صحیح لوگوں کو تلاش کے نتائج میں دکھائے۔" },
      { question: "کیا Google پر آنے کے لیے پیسے دینے پڑتے ہیں؟", answer: "نہیں۔ Google کے عام (organic) نتائج میں آنا مفت ہے۔ Google Ads الگ پیڈ سروس ہے اور یہ عام نتائج کی رینکنگ پر اثر نہیں ڈالتی۔" },
      { question: "کیا SEO خود سیکھا جا سکتا ہے؟", answer: "جی ہاں۔ Google کی مفت SEO Starter Guide اور BuildSkills کی SEO گائیڈز سے شروع کریں، اور اپنی ویب سائٹ پر عملی طور پر آزمائیں۔" },
      { question: "SEO کے نتائج کب نظر آتے ہیں؟", answer: "کوئی مقررہ وقت نہیں۔ Google کے مطابق crawling میں چند دن سے چند ہفتے لگ سکتے ہیں، اور رینکنگ میں عموماً اس سے زیادہ۔ مستقل اچھا مواد سب سے اہم ہے۔" },
    ],
    related: [
      "seo/what-is-seo",
      "seo/how-to-get-website-on-google",
      "seo/free-seo-course",
      "websites/website-banane-ka-tarika-urdu",
    ],
    sources: [src.howSearch, src.starter, src.recrawl, src.doINeedSeo, src.spam],
    next: { href: "/learn/seo/how-to-get-website-on-google", label: "ویب سائٹ کو Google پر کیسے لائیں (انگریزی)" },
  },
];
