import { useState } from 'react';
import Lightbox from './Lightbox.jsx';
import { BrandMark, LinkIcon, Star, YoutubeLogo } from './Icons.jsx';
import { APP, DESCRIPTION, FEATURES, HEADLINE, META, REVIEWS, SHOTS } from '../data/content.js';

const fmt = (n) => n.toFixed(1).replace('.', ',');

export default function AppHero({ onInstall }) {
  const media = [
    { type: 'video', src: APP.videoUrl, label: APP.videoTitle },
    ...SHOTS.map((s) => ({ type: 'image', src: s.src, label: s.label })),
  ];
  const [current, setCurrent] = useState(null);
  const shown = SHOTS.slice(0, 3);
  const more = SHOTS.length - shown.length;

  return (
    <section className="container app-hero layout">
      {/* ---------- Cột thông tin bên trái ---------- */}
      <aside className="app-sidebar col-side is-sticky">
        <div className="app-title">
          <BrandMark size={52} radius={10} />
          <h1>{APP.name}</h1>
        </div>
        <dl className="app-facts">
          <div>
            <dt>Bảng giá</dt>
            <dd>{APP.pricing}</dd>
          </div>
          <div>
            <dt>Đánh giá</dt>
            <dd className="fact-rating">
              {fmt(APP.rating)} <Star size={13} />
              <a href="#reviews" className="link-underline rating-count">({REVIEWS.length})</a>
            </dd>
          </div>
          <div>
            <dt>Nhà phát triển</dt>
            <dd>
              <a href="#support" className="link-underline">{APP.developer}</a>
            </dd>
          </div>
        </dl>
        <button type="button" className="btn-install" onClick={onInstall}>
          Cài đặt
        </button>
        <a href="#demo" className="demo-link link-underline" onClick={(e) => e.preventDefault()}>
          Xem cửa hàng demo
        </a>
      </aside>

      {/* ---------- Nội dung chính ---------- */}
      <div className="app-main col-main">
        <div className="gallery">
          <button type="button" className="gallery-video" onClick={() => setCurrent(0)} aria-label={`Xem video: ${APP.videoTitle}`}>
            <span className="yt-top">
              <BrandMark size={40} radius={20} />
              <span className="yt-titles">
                <b>{APP.videoTitle}</b>
                <small>{APP.videoChannel}</small>
              </span>
            </span>
            <span className="poster">
              <span className="poster-kicker">Chào mừng đến với</span>
              <span className="poster-brand">{APP.brand}</span>
              <span className="poster-sub">
                Tự động <mark>trả lời khách hàng</mark> và chốt đơn trên mọi kênh bán hàng
              </span>
            </span>
            <span className="yt-play" aria-hidden="true">
              <svg viewBox="0 0 68 48" width="68" height="48">
                <path d="M66.5 7.7a8.5 8.5 0 00-6-6C55.3.3 34 .3 34 .3s-21.3 0-26.5 1.4a8.5 8.5 0 00-6 6C.1 13 .1 24 .1 24s0 11 1.4 16.3a8.5 8.5 0 006 6C12.7 47.7 34 47.7 34 47.7s21.3 0 26.5-1.4a8.5 8.5 0 006-6C67.9 35 67.9 24 67.9 24s0-11-1.4-16.3z" fill="#f00" />
                <path d="M45 24L27 14v20z" fill="#fff" />
              </svg>
            </span>
            <span className="yt-link" aria-hidden="true">
              <LinkIcon />
            </span>
            <span className="yt-watch" aria-hidden="true">
              Xem trên <YoutubeLogo /> YouTube
            </span>
          </button>

          <div className="gallery-shots">
            {shown.map((s, i) => (
              <button
                key={s.src}
                type="button"
                className={`gallery-shot${i === shown.length - 1 && more > 0 ? ' has-more' : ''}`}
                data-label={s.label}
                onClick={() => setCurrent(i + 1)}
                aria-label={`Xem ảnh: ${s.label}`}
              >
                <ShotImage src={s.src} alt={s.label} />
                {i === shown.length - 1 && more > 0 && <span className="shot-more">+ {more} ảnh khác</span>}
              </button>
            ))}
          </div>
        </div>

        <h2 className="app-headline" id="features">{HEADLINE}</h2>
        <p className="app-desc">{DESCRIPTION}</p>
        <ul className="app-features">
          {FEATURES.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <dl className="app-meta">
          {META.map((m) => (
            <div key={m.label} className="meta-row">
              <dt>{m.label}</dt>
              <dd>
                {m.values && m.values.map((v) => <span key={v}>{v}</span>)}
                {m.links &&
                  m.links.map((l) => (
                    <a key={l} href="#features" className="link-underline">
                      {l}
                    </a>
                  ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <Lightbox items={media} index={current} onClose={() => setCurrent(null)} onIndex={setCurrent} />
    </section>
  );
}

// Ảnh chưa có file thì ẩn để hiện khung chờ
function ShotImage({ src, alt }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}
