type Props = { image: string; title: string };

export default function SystemArchitecture({ image, title }: Props) {
  if (!image) return null;
  return <section className="detail-architecture"><div className="detail-section-heading"><p className="detail-label">Architecture</p><h2 className="detail-heading">How it fits together.</h2></div><div className="architecture-frame"><img src={image} alt={`${title} system architecture`} /></div><p className="architecture-caption">System architecture for {title}.</p></section>;
}
