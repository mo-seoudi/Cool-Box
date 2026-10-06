import { campaigns } from '../../content/campaigns'

export default function CampaignGallery() {
  if (!campaigns.length) return null

  return (
    <section className="campaigns">
      <div className="shell">
        <div className="sectionTitle">
          <span />
          <div>
            <p>COOL BOX IN ACTION</p>
            <h2>
              Recent <em>campaigns.</em>
            </h2>
          </div>
        </div>

        <div className="campaignGrid">
          {campaigns.map((campaign) => (
            <article className="campaignCard" key={campaign.title}>
              {campaign.images?.[0] && (
                <img src={campaign.images[0]} alt={campaign.title} />
              )}

              <div className="campaignCardText">
                {campaign.date && <small>{campaign.date}</small>}
                <h3>{campaign.title}</h3>
                {campaign.description && <p>{campaign.description}</p>}
              </div>

              {campaign.images?.length > 1 && (
                <div className="campaignThumbs">
                  {campaign.images.slice(1).map((image) => (
                    <img key={image} src={image} alt="" />
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
