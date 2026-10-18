import { BrandMark, ChevronDown, GlobeIcon } from './Icons.jsx';
import { FOOTER_COLUMNS, FOOTER_LEGAL } from '../data/content.js';

export function CtaBand({ onStart }) {
  return (
    <section className="cta-band">
      <h2>Sẵn sàng tự động hoá doanh nghiệp?</h2>
      <button type="button" className="btn-green" onClick={onStart}>
        Dùng thử miễn phí 14 ngày
      </button>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <a href="/" className="footer-logo" aria-label="AutoFlow AI">
            <BrandMark size={44} variant="mono" />
          </a>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="footer-col">
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <ul className="footer-legal">
            {FOOTER_LEGAL.map((l) => (
              <li key={l}>
                <a href="#top">{l}</a>
              </li>
            ))}
          </ul>
          <label className="footer-lang">
            <GlobeIcon />
            <select defaultValue="vi" aria-label="Ngôn ngữ">
              <option value="vi">Tiếng Việt</option>
              <option value="en">English</option>
            </select>
            <ChevronDown />
          </label>
        </div>
      </div>
    </footer>
  );
}
