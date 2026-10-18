import { useState } from 'react';
import { LinkIcon, Star, Stars } from './Icons.jsx';
import { APP, REVIEWS } from '../data/content.js';

const INITIAL = 3;
const LONG_TEXT = 300;

export default function Reviews({ onWrite }) {
  const [showAll, setShowAll] = useState(false);
  const total = REVIEWS.length;
  const avg = REVIEWS.reduce((s, r) => s + r.stars, 0) / total;
  const dist = [5, 4, 3, 2, 1].map((k) => [k, REVIEWS.filter((r) => r.stars === k).length]);
  const list = showAll ? REVIEWS : REVIEWS.slice(0, INITIAL);

  return (
    <section className="container reviews layout" id="reviews">
      <aside className="reviews-summary col-side">
        <h2 className="section-h">
          Đánh giá <span className="muted-count">({total})</span>
        </h2>
        <p className="summary-label">Đánh giá tổng quan</p>
        <div className="summary-score">
          <b>{avg.toFixed(1).replace('.', ',')}</b>
          <Stars value={Math.round(avg * 2) / 2} size={15} />
        </div>
        <ul className="summary-bars">
          {dist.map(([k, n]) => (
            <li key={k}>
              <span className="bar-label">
                {k} <Star size={11} />
              </span>
              <span className="bar-track">
                <span className="bar-fill" style={{ width: `${(n / total) * 100}%` }}></span>
              </span>
              <a href="#reviews" className={`bar-count${n ? ' link-underline' : ''}`}>{n}</a>
            </li>
          ))}
        </ul>
        <div className="summary-actions">
          <button type="button" className="btn-outline" onClick={onWrite}>
            Viết đánh giá
          </button>
          <button type="button" className="btn-outline" onClick={() => setShowAll((v) => !v)}>
            {showAll ? 'Thu gọn' : 'Tất cả đánh giá'}
          </button>
        </div>
      </aside>

      <div className="reviews-list col-main">
        {list.map((r) => (
          <article key={r.name + r.date} className="review" id={reviewId(r)}>
            <div className="review-author">
              <b>{r.name}</b>
              <span>{r.place}</span>
              <span>{r.used}</span>
            </div>
            <div className="review-content">
              <div className="review-top">
                <Stars value={r.stars} size={13} />
                <span className="review-meta">
                  <time>{r.date}</time>
                  <CopyLink id={reviewId(r)} />
                </span>
              </div>
              <Clamp text={r.text} className="review-text" lines={r.text.length > LONG_TEXT ? 6 : 0} />
              <div className="review-reply">
                <p className="reply-meta">
                  {APP.developer} đã phản hồi {r.replyDate}
                </p>
                <Clamp text={r.reply} className="reply-text" lines={2} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const reviewId = (r) =>
  'review-' + r.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\u0111/gi, 'd').toLowerCase().replace(/[^a-z0-9]+/g, '-');

// Nút sao chép liên kết tới một đánh giá
function CopyLink({ id }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    const url = `${location.origin}${location.pathname}#${id}`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      window.prompt('Sao chép liên kết:', url);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button type="button" className="copy-link" onClick={copy} aria-label="Sao chép liên kết đánh giá" title={copied ? 'Đã sao chép' : 'Sao chép liên kết đánh giá'}>
      <LinkIcon width={16} height={16} />
      {copied && <span className="copied">Đã sao chép</span>}
    </button>
  );
}

// Thu gọn đoạn chữ, nút "Xem thêm" / "Thu gọn"
function Clamp({ text, className, lines }) {
  const [open, setOpen] = useState(false);
  if (!lines) return <p className={className}>{text}</p>;
  return (
    <>
      <p className={`${className} clamp${open ? ' is-open' : ''}`} style={{ WebkitLineClamp: open ? 'unset' : lines }}>
        {text}
      </p>
      <button type="button" className="show-more" onClick={() => setOpen((v) => !v)}>
        {open ? 'Thu gọn' : 'Xem thêm'}
      </button>
    </>
  );
}
