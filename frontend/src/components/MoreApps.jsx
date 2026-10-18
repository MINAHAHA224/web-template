import { Star } from './Icons.jsx';
import { MORE_APPS } from '../data/content.js';

export default function MoreApps() {
  return (
    <section className="container more-apps">
      <h2 className="section-h">Ứng dụng tương tự</h2>
      <div className="more-grid">
        {MORE_APPS.map((a) => (
          <a key={a.name} href="#top" className="more-card">
            <span className="more-icon" style={{ background: a.color }}>
              {a.icon}
            </span>
            <span className="more-info">
              <b>{a.name}</b>
              <small>
                {a.rating} <span className="green-star"><Star size={11} /></span> ({a.count}) • {a.plan}
              </small>
              <small>{a.desc}</small>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
