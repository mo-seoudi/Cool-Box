/*
  EDIT THIS SECTION
  -----------------
  Text and the main photo for Active Communities are all in this file.
*/

const communityItems = [
  { title: 'Padel Courts', description: 'Where hydration is essential and engagement is natural.' },
  { title: 'Sports Complexes', description: 'Active communities seeking quality experiences.' },
  { title: 'Active Communities', description: 'Engaged participants ready to redeem offers.' },
]

export default function ActiveCommunities() {
  return (
    <section className="network">
      <div className="shell networkGrid">
        <div>
          <p className="kicker pale">WE STARTED WHERE ENERGY IS HIGH</p>
          <h2>
            Built to engage
            <br />
            <em>active communities.</em>
          </h2>

          <p className="networkIntro">
            Cool Box began in environments where hydration is essential and engagement is natural.
            The concept is designed to scale wherever people gather and brands want meaningful presence.
          </p>

          <div className="startGrid">
            {communityItems.map((item) => (
              <div key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
            ))}
          </div>
        </div>

        <figure className="padelMoment">
          <img src="/images/box-padel.png" alt="Cool Box displayed beside a padel court" />
          <figcaption>
            <span>IN THE REAL WORLD</span>
            <strong>Right where the audience is.</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
