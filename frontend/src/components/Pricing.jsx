import { CheckIcon } from './Icons.jsx';
import { PLANS } from '../data/content.js';

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2 className="section-h">Bảng giá</h2>
        <p className="section-sub">Chọn gói phù hợp nhất với doanh nghiệp của bạn.</p>
        <div className="plans">
          {PLANS.map((p) => (
            <article key={p.name} className="plan">
              <p className="plan-name">{p.name}</p>
              <div className="plan-head">
                <p className="plan-price">
                  {p.price}
                  {p.unit && <small> {p.unit}</small>}
                </p>
                {p.save && <p className="plan-save">{p.save}</p>}
              </div>
              <p className="plan-feat-title">Tính năng</p>
              <ul className="plan-feats">
                {p.features.map((f) => (
                  <li key={f}>
                    <CheckIcon /> {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="pricing-note">
          Giá tính bằng VNĐ, đã gồm VAT. Phí định kỳ và phí theo mức sử dụng được tính mỗi 30 ngày.{' '}
          <a href="#pricing" className="link-underline strong">Xem tất cả lựa chọn giá</a>
        </p>
      </div>
    </section>
  );
}
