import { Dim, TitleBlock } from "@/components/blueprint/parts";
import { SectionHead } from "./shared";

/* Prizes and criteria from dsh-hacks-v2.devpost.com */
const PRIZES: { place: string; n: string; items: string }[] = [
  { place: "1st place", n: "1 team", items: "Momen credits ($2,000) · Adaption Labs credits ($1,000) · CleanShot X licenses ($140) · CodeCrafters VIP ($720) · Devswarm Pro ($72) · AoPS gift cards ($50)" },
  { place: "2nd place", n: "1 team", items: "Momen credits ($2,000) · Adaption Labs credits ($1,000) · CleanShot X licenses ($140) · CodeCrafters VIP ($360) · Devswarm Pro ($18) · AoPS gift cards ($25)" },
  { place: "3rd place", n: "1 team", items: "Momen credits ($2,000) · Adaption Labs credits ($1,000) · CleanShot X licenses ($140) · CodeCrafters VIP ($180) · Devswarm Pro ($18) · AoPS gift cards ($25)" },
  { place: "Tin Computer Growth Plan", n: "Up to 100 teams", items: "$299 in Growth Plan credits per eligible team" },
  { place: "Best research-oriented project", n: "1 team", items: "A 50% scholarship for the YRI 1:1 Research Fellowship Program" },
];

const CRITERIA = [
  { name: "Idea", detail: "Did the proposal address the problem statement and theme? Was the idea innovative? How much impact could it have if deployed to the public?" },
  { name: "Implementation", detail: "Does the solution work? Did the team achieve everything they wanted? How technically challenging or impressive was it?" },
  { name: "Design", detail: "Did the team put thought into UX? How well designed is the interface?" },
  { name: "Presentation", detail: "Does the presentation clearly define and address the problem statement?" },
];

/* Cyanotype sheet: the garden canvas paints its blueprint ground and walks
   you into the conservatory here. */
export default function Prizes() {
  return (
    <section id="prizes" className="section prizes sheet cyan" data-swing="">
      <div className="wrap">
        <SectionHead no="04" title="Prizes" meta="$100,000+" />
        <div className="pool-wrap">
          <p className="pool">$100,000+</p>
          <Dim label="Prize pool · more on the way" />
        </div>
        <p className="pool-sub">
          in prizes, with more on the way. Watch Devpost and the Discord for announcements.
        </p>
        <table className="prize-table">
          <caption className="label">Prize schedule · non-cash: sponsor credits, licenses, memberships</caption>
          <thead>
            <tr><th scope="col">Item</th><th scope="col">Prize</th><th scope="col">Winners</th><th scope="col">Package</th></tr>
          </thead>
          <tbody>
            {PRIZES.map((p, i) => (
              <tr key={p.place}>
                <td className="no">P{i + 1}</td>
                <th scope="row">{p.place}</th>
                <td className="n">{p.n}</td>
                <td>{p.items}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="criteria">
          {CRITERIA.map((c, i) => (
            <div key={c.name}>
              <span className="label">C{i + 1}</span>
              <h3>{c.name}</h3>
              <p>{c.detail}</p>
            </div>
          ))}
        </div>
        <TitleBlock no={4} title="Prizes" />
      </div>
    </section>
  );
}
