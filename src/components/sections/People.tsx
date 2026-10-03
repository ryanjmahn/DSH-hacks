/* eslint-disable @next/next/no-img-element */
import { LINKS, SectionHead, ext } from "./shared";

const SPONSORS: { name: string; logo: string; href: string }[] = [
  { name: "CodeCrafters Forum", logo: "/codecrafters-logo.png", href: "https://codecrafters.io/" },
  { name: "Featherless AI", logo: "/featherless-logo.png", href: "https://featherless.ai/" },
  { name: "relay.app", logo: "/relay-logo-clean.png", href: "https://relay.app/" },
  { name: "Crackd", logo: "/crackd-logo.png", href: "https://www.crackd.one/" },
  { name: "Aniko", logo: "/aniko-logo-clean.png", href: "https://www.aniko.ai/" },
  { name: "CleanShot", logo: "/cleanshot-logo-clean.png", href: "https://cleanshot.com/" },
  { name: "Ideavo", logo: "/ideavo-logo.png", href: "https://ideavo.ai/" },
  { name: "Iteration Machine", logo: "/iterationmachine-logo.png", href: "https://iterationmachine.com/" },
  { name: "LLM.API", logo: "/llmapi-logo.png", href: "https://llmapi.com/" },
  { name: "InterviewBuddy", logo: "/interviewbuddy-logo.png", href: "https://interviewbuddy.net/" },
  { name: "AoPS", logo: "/aops-logo.png", href: "https://artofproblemsolving.com/" },
  { name: "HowtoHackathon", logo: "/howtohackathon-logo.png", href: "https://www.howtohackathon.org/" },
  { name: "Devswarm", logo: "/devswarm-logo.png", href: "https://devswarm.ai/" },
];

/* Where V1's judges worked (logos in /public/professionals). */
const JUDGES_FROM: [string, string][] = [
  ["Microsoft", "microsoft"], ["Apple", "apple"], ["Amazon", "amazon"], ["Meta", "meta"],
  ["PayPal", "paypal"], ["AWS", "aws"], ["Visa", "visa"], ["JPMorgan Chase", "jpmorgan"],
  ["Cisco", "ciscosystems"], ["HCLTech", "hcltech"], ["U.S. Bank", "usbank"], ["Citizens", "citizensbank"],
  ["State Street", "statestreet"], ["Highspot", "highspot"], ["Develop Health", "develophealth"],
  ["Octery", "octery"], ["ERP Smart Labs", "erpsmartlabs"], ["Achieve", "achieve"],
];

const TALKS = [
  { id: "v_6Beq5OL5o", speaker: "Maulik Bhatt", topic: "Search to Intelligence, RAG Driven Agents" },
  { id: "mtKC_Fvi1X8", speaker: "Karthik Karunanithi", topic: "What Nobody Tells You About Building Real AI" },
  { id: "BqeOkzui3Bs", speaker: "Sarvesh Gupta", topic: "How Distributed Databases Actually Work" },
  { id: "T2BTGFHIp7g", speaker: "Siyuan Feng", topic: "Protecting Test Data with AI" },
  { id: "YjerivsGsyM", speaker: "Jim Markunas", topic: "Product Thinking 101" },
  { id: "hwUY4jseRlc", speaker: "Ratish Kumar Saravanan", topic: "Intro to Predictive Analytics" },
];

const domain = (href: string) => new URL(href).hostname.replace(/^www\./, "");

export default function People() {
  return (
    <section id="people" className="section" data-swing="">
      <div className="wrap">
        <SectionHead no="05" title="People" />
        <div className="two-col">
          <div id="sponsors">
            <h3 className="people-h">Sponsors</h3>
            <p className="sub">
              Want to support DSH Hacks? Reach us on Discord or message the hackathon manager on Devpost.
            </p>
            <ul className="logo-list">
              {SPONSORS.map((s) => (
                <li key={s.name}>
                  <a href={s.href} {...ext}>
                    <img className="logo" src={s.logo} alt={s.name} loading="lazy" />
                    <span>{domain(s.href)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div id="judges">
            <h3 className="people-h">Judges from</h3>
            <p className="sub">
              Interested in judging? Same channels: Discord, or the hackathon manager on Devpost.
            </p>
            <div className="logo-grid">
              {JUDGES_FROM.map(([name, file]) => (
                <div key={file}>
                  <img className="logo" src={`/professionals/${file}.png`} alt={name} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="workshops" style={{ marginTop: "clamp(64px, 8vw, 112px)" }}>
          <h3 className="people-h">Workshops</h3>
          <p className="sub">Recorded talks on AI, product thinking, data, and more.</p>
          <ul className="talks">
            {TALKS.map((t) => (
              <li key={t.id}>
                <a href={`https://www.youtube.com/watch?v=${t.id}`} {...ext}>
                  <span className="t">{t.topic}</span>
                  <span className="s">{t.speaker}</span>
                  <span className="w">Watch</span>
                </a>
              </li>
            ))}
          </ul>
          <a className="btn" href={LINKS.youtube} {...ext}>Subscribe on YouTube</a>
        </div>
      </div>
    </section>
  );
}
