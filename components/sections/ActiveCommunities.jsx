import { siteContent } from '../../content/site'

export default function ActiveCommunities() {
  const { activeCommunities } = siteContent

  return (
    <section className="network">
      <div className="shell networkGrid">
        <div>
          <p className="kicker pale">{activeCommunities.kicker}</p>

          <h2>
            {activeCommunities.title}
            <br />
            <em>{activeCommunities.titleEmphasis}</em>
          </h2>

          <p className="networkIntro">{activeCommunities.description}</p>

          <div className="startGrid">
            {activeCommunities.items.map((item) => (
              <div key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
            ))}
          </div>
        </div>

        <figure className="padelMoment">
          <img
            src={activeCommunities.image}
            alt={activeCommunities.imageAlt}
          />
          <figcaption>
            <span>{activeCommunities.imageLabel}</span>
            <strong>{activeCommunities.imageCaption}</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
