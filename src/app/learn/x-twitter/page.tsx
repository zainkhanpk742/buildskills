import Link from "next/link";
import { guidesInArea } from "@/data/site";

export const metadata = {
  title: "X learning path: profiles, posts, and audience growth",
  description:
    "Learn how to set up an X profile, publish useful posts, join conversations, understand analytics, and review current platform features.",
  alternates: { canonical: "/learn/x-twitter" },
  openGraph: {
    type: "website",
    title: "X learning path: profiles, posts, and audience growth",
    description: "Practical guides to using X for learning, publishing, and professional development.",
    url: "/learn/x-twitter",
    siteName: "BuildSkills",
  },
  twitter: {
    card: "summary",
    title: "X learning path: profiles, posts, and audience growth",
    description: "Learn how to use X for publishing and professional development.",
  },
};

export default function Page() {
  const guides = guidesInArea("X / Twitter");

  return (
    <main id="content">
      <header className="page-head">
        <div className="page-wrap">
          <p className="kicker plain" style={{ color: "var(--signal)" }}>
            X / TWITTER
          </p>
          <h1 className="display-section balance stack-4 max-3">
            How do I grow and make money on X?
          </h1>
          <p className="lede pretty stack-5 max-2">
            Learn how to turn an X account into a useful public presence:
            build the profile, publish ideas, join conversations, grow the right
            audience, create business opportunities, and understand the
            platform&apos;s current monetization options.
          </p>
        </div>
      </header>

      <div className="page-wrap section-pad">
        <section className="area-grid">
          <div>
            <p className="kicker plain faint">What you will learn</p>
            <h2 className="serif" style={{ fontSize: "2rem", margin: 0 }}>
              From profile to opportunity
            </h2>
            <p className="muted" style={{ maxWidth: "42rem", marginTop: "1rem", lineHeight: 1.75 }}>
              X works best when the account has a clear subject and the content
              repeatedly helps a particular audience. The goal is not to post
              more for its own sake. The goal is to become useful and
              recognizable enough that the right people know why to follow,
              reply, visit, or contact you.
            </p>
          </div>
          <aside>
            <div className="card" style={{ padding: "1.25rem" }}>
              <p className="kicker plain faint">Learning order</p>
              <ol className="index-list" style={{ marginTop: "1rem" }}>
                <li className="index-row"><span className="num tabular">01</span><span>Build the profile</span></li>
                <li className="index-row"><span className="num tabular">02</span><span>Choose content themes</span></li>
                <li className="index-row"><span className="num tabular">03</span><span>Grow through useful conversations</span></li>
                <li className="index-row"><span className="num tabular">04</span><span>Turn attention into business</span></li>
                <li className="index-row"><span className="num tabular">05</span><span>Understand monetization</span></li>
              </ol>
            </div>
          </aside>
        </section>

        <section className="section-pad">
          <p className="kicker plain faint">The X learning path</p>
          <h2 className="serif" style={{ fontSize: "2rem", margin: 0 }}>
            Five practical guides
          </h2>
          <ul className="index-list" style={{ borderTop: "1px solid var(--line)", marginTop: "1.5rem" }}>
            {guides.map((guide, index) => (
              <li key={guide.slug}>
                <Link href={`/learn/${guide.slug}`} className="index-row">
                  <span className="num tabular">{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="title" style={{ display: "block" }}>{guide.title}</span>
                    <span className="meta" style={{ display: "block", marginTop: "0.3rem" }}>{guide.summary}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="section-pad">
          <div className="prose" style={{ maxWidth: "48rem" }}>
            <p className="kicker plain faint">Build your account</p>
            <h2 className="serif" style={{ fontSize: "2rem" }}>
              Start with a clear reason to follow you
            </h2>
            <p>
              Choose one broad subject you can discuss for a long time. Then
              choose three to five recurring themes inside it. For example, a
              web developer might talk about website mistakes, practical SEO,
              project lessons, useful tools, and small business technology.
            </p>
            <p>
              Make the profile explain that subject quickly. Your name, image,
              bio, header, link, and pinned post should tell a visitor what you
              know and what they can do next. The profile is the landing page
              for everything you publish.
            </p>
            <p>
              Then create a repeatable content system. Teach something. Show a
              process. Explain a mistake. Share an observation from real work.
              Answer a question. Comment on another person&apos;s useful idea
              with your own context. These formats give you more substance than
              trying to invent a clever post every day.
            </p>
          </div>
        </section>

        <section className="section-pad">
          <div className="area-grid">
            <div className="prose">
              <p className="kicker plain faint">A practical weekly system</p>
              <h2 className="serif" style={{ fontSize: "2rem" }}>
                What should I actually do?
              </h2>
              <p>
                Pick a sustainable rhythm rather than a perfect one. A simple
                week could include several useful original posts, thoughtful
                replies in relevant conversations, one deeper explanation or
                thread, and time to review what people actually responded to.
              </p>
              <p>
                Keep a list of questions people ask you. Every repeated
                question can become a post, a longer guide on your website, a
                case study, or a service conversation. This turns social
                content into a learning and business system instead of a
                separate activity.
              </p>
            </div>
            <div>
              <div className="card" style={{ padding: "1.25rem" }}>
                <p className="kicker plain faint">Avoid</p>
                <ul className="meta" style={{ lineHeight: 1.8, paddingLeft: "1.2rem" }}>
                  <li>Buying followers or artificial engagement</li>
                  <li>Copying other creators without adding your own value</li>
                  <li>Making every reply a sales pitch</li>
                  <li>Chasing every trend outside your subject</li>
                  <li>Inventing results, clients, or expertise</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="prose" style={{ maxWidth: "48rem" }}>
            <p className="kicker plain faint">Use X for business</p>
            <h2 className="serif" style={{ fontSize: "2rem" }}>
              Turn expertise into opportunities
            </h2>
            <p>
              For a freelancer or service business, the most useful conversion
              may not be an X payout. It may be a website visit, enquiry,
              consultation, project, partnership, or referral. Make the path
              obvious: useful post → deeper resource → proof → service or
              contact page.
            </p>
            <p>
              Do not pitch everyone who interacts with you. Listen for people
              describing a problem you genuinely solve. Add useful information
              first, then let the other person decide whether they want help.
              A public body of useful work becomes proof that keeps working
              after the original post is gone.
            </p>
          </div>
        </section>

        <section className="section-pad">
          <div className="card" style={{ padding: "1.5rem" }}>
            <p className="kicker plain faint">Monetization — current guidance</p>
            <h2 className="serif" style={{ fontSize: "2rem", margin: 0 }}>
              Platform payouts can change
            </h2>
            <p className="muted" style={{ maxWidth: "50rem", lineHeight: 1.75, marginTop: "1rem" }}>
              X&apos;s creator payout programs and eligibility rules can
              change, and access may depend on factors such as location, account
              standing, and the feature itself. Check the current terms in
              X&apos;s official help and in-account monetization settings
              before relying on platform payouts or quoting eligibility
              thresholds.
            </p>
            <p className="muted" style={{ maxWidth: "50rem", lineHeight: 1.75 }}>
              X also offers Creator Subscriptions for eligible creators. The
              wider business model can include services, products,
              sponsorships, consulting, affiliates where appropriate, and
              traffic to assets you control such as your website.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
              <a className="search-submit" href="https://help.x.com/en" target="_blank" rel="noreferrer">
                X Help Center
              </a>
              <a className="search-submit" href="https://help.x.com/en/using-x/subscriptions-creator" target="_blank" rel="noreferrer">
                X Creator Subscriptions
              </a>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="prose" style={{ maxWidth: "48rem" }}>
            <p className="kicker plain faint">Your first exercise</p>
            <h2 className="serif" style={{ fontSize: "2rem" }}>
              Build the first version today
            </h2>
            <ol>
              <li>Write one sentence describing what your account is about.</li>
              <li>Choose three recurring topics you can teach or discuss.</li>
              <li>Rewrite your bio so a new visitor understands the value quickly.</li>
              <li>Write five useful post ideas from questions people already ask.</li>
              <li>Publish one useful post and add thoughtful replies to relevant conversations.</li>
              <li>Review the response and turn the best question into your next piece.</li>
            </ol>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/learn/x-twitter/how-to-build-an-x-profile" className="primary-btn">
              Start the first guide →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
