import SectionTitle from '../ui/SectionTitle'

/*
  EDIT THIS SECTION
  -----------------
  All visible environment names and descriptions are below.
*/

const environments = [
  { title: 'Corporate Events', description: 'Conferences and business gatherings.' },
  { title: 'Universities', description: 'Campus events and student activities.' },
  { title: 'Festivals', description: 'Cultural and music celebrations.' },
  { title: 'Tournaments', description: 'Sports competitions and championships.' },
  { title: 'Exhibitions', description: 'Trade shows and industry events.' },
]

export default function Environments() {
  return (
    <section className="audience" id="environments">
      <div className="shell">
        <SectionTitle eyebrow="BUILT FOR ACTIVE ENVIRONMENTS">
          Advertising people
          <br />
          <em>actually use.</em>
        </SectionTitle>

        <p className="sectionIntro">
          A branded hydration box designed for real engagement — from sports courts to large-scale events.
        </p>

        <div className="environmentGrid">
          {environments.map((item, index) => (
            <article key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <p className="anywhere">Anywhere People Gather. Anywhere Brands Want Presence.</p>
      </div>
    </section>
  )
}
