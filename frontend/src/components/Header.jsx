import { useEffect, useState } from 'react';
import { BrandMark, ChevronDown, ChevronRight, MenuIcon, SearchIcon } from './Icons.jsx';
import { APP, CATEGORIES, STORIES } from '../data/content.js';

export default function Header({ onLogin, onStart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="site-logo" href="/" aria-label={`${APP.brand} - Trang chủ`}>
            <BrandMark size={30} variant="mono" />
            <span>{APP.brand}</span>
          </a>

          <form className="header-search" role="search" onSubmit={(e) => e.preventDefault()}>
            <SearchIcon />
            <input type="search" placeholder="Tìm tính năng, hướng dẫn và hơn thế nữa" aria-label="Tìm kiếm" />
          </form>

          <button
            type="button"
            className={`browse-btn${menuOpen ? ' is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="mega-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            Khám phá <ChevronDown />
          </button>

          <button
            type="button"
            className="menu-btn"
            aria-label="Mở menu"
            aria-expanded={menuOpen}
            aria-controls="mega-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <MenuIcon />
          </button>

          <div className="header-actions">
            <button type="button" className="btn-link" onClick={onLogin}>
              Đăng nhập
            </button>
            <button type="button" className="btn-pill" onClick={onStart}>
              Dùng thử miễn phí
            </button>
          </div>
        </div>

        {/* Mega menu: trượt xuống dưới header */}
        <div id="mega-menu" className={`mega-menu${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
          <div className="container mega-inner">
            <div className="mega-cats">
              <h2 className="mega-label">Tính năng theo danh mục</h2>
              <ul className="mega-grid">
                {CATEGORIES.map((c) => (
                  <li key={c.title}>
                    <a href="#features" onClick={close} tabIndex={menuOpen ? 0 : -1}>
                      <span className="mega-title">{c.title}</span>
                      <span className="mega-desc">{c.desc}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mega-stories">
              {STORIES.map((s, i) => (
                <a key={s.title} href="#reviews" className={`story-card art-${i + 1}`} onClick={close} tabIndex={menuOpen ? 0 : -1}>
                  <span className="story-art" aria-hidden="true">
                    <BrandMark size={64} radius={18} />
                  </span>
                  <span className="story-text">
                    <span className="story-tag">{s.tag}</span>
                    <span className="story-title">{s.title}</span>
                  </span>
                </a>
              ))}
              <a href="#reviews" className="mega-more" onClick={close} tabIndex={menuOpen ? 0 : -1}>
                Xem thêm câu chuyện <ChevronRight />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Lớp phủ tối phía sau menu */}
      <div className={`page-overlay${menuOpen ? ' is-open' : ''}`} onClick={close} aria-hidden="true"></div>
    </>
  );
}
