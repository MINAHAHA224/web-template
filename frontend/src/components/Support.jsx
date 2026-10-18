import { APP } from '../data/content.js';

export default function Support() {
  return (
    <section className="container support layout" id="support">
      <div className="support-intro col-side">
        <h2 className="section-h">Hỗ trợ</h2>
        <p>Ứng dụng được hỗ trợ bởi {APP.developer}.</p>
      </div>
      <dl className="support-rows col-main">
        <div className="meta-row">
          <dt>Tài nguyên</dt>
          <dd>
            <a href="#support" className="link-underline strong">Chính sách bảo mật</a>
          </dd>
        </div>
        <div className="meta-row">
          <dt>Nhà phát triển</dt>
          <dd>
            <a href="#support" className="link-underline strong">{APP.developer}</a>
            <a href="/" className="link-underline strong">Website</a>
            <span className="muted">{APP.location}</span>
          </dd>
        </div>
        <div className="meta-row">
          <dt>Ra mắt</dt>
          <dd>
            <span className="muted">{APP.launched}</span>
          </dd>
        </div>
      </dl>
    </section>
  );
}
