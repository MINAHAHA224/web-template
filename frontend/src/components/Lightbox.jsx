import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, ArrowRight, CloseIcon } from './Icons.jsx';

function youtubeEmbed(url) {
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
  return m ? `https://www.youtube.com/embed/${m[1]}?autoplay=1&rel=0` : url;
}

// Xem toàn màn hình: video YouTube hoặc bộ ảnh (có nút Trước / Sau / Đóng)
export default function Lightbox({ items, index, onClose, onIndex }) {
  const open = index !== null;
  const many = items.length > 1;

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (many && e.key === 'ArrowRight') onIndex((index + 1) % items.length);
      if (many && e.key === 'ArrowLeft') onIndex((index - 1 + items.length) % items.length);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, index, many, items.length, onClose, onIndex]);

  if (!open) return null;
  const item = items[index];

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.label}>
      <button type="button" className="lightbox-close" onClick={onClose}>
        <CloseIcon /> Đóng
      </button>
      <div className="lightbox-stage" onClick={onClose}>
        <div className="lightbox-frame" onClick={(e) => e.stopPropagation()}>
          {item.type === 'video' ? (
            <div className="lightbox-video">
              <iframe
                src={youtubeEmbed(item.src)}
                title={item.label}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <LightboxImage key={item.src} item={item} />
          )}
        </div>
      </div>
      {many && (
        <div className="lightbox-nav">
          <button type="button" onClick={() => onIndex((index - 1 + items.length) % items.length)} aria-label="Trước">
            <ArrowLeft />
          </button>
          <span>
            {index + 1} / {items.length}
          </span>
          <button type="button" onClick={() => onIndex((index + 1) % items.length)} aria-label="Sau">
            <ArrowRight />
          </button>
        </div>
      )}
    </div>,
    document.body
  );
}

function LightboxImage({ item }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className="lightbox-empty">{item.label} · chưa có ảnh (16:9)</div>;
  return <img src={item.src} alt={item.label} onError={() => setFailed(true)} />;
}
