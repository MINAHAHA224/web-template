import { useState } from 'react';
import Header from './components/Header.jsx';
import AppHero from './components/AppHero.jsx';
import Pricing from './components/Pricing.jsx';
import Reviews from './components/Reviews.jsx';
import Support from './components/Support.jsx';
import MoreApps from './components/MoreApps.jsx';
import Footer, { CtaBand } from './components/Footer.jsx';
import Modal from './components/Modal.jsx';
import { APP } from './data/content.js';

export default function App() {
  const [modal, setModal] = useState(null); // 'login' | 'install' | 'review'
  const close = () => setModal(null);

  return (
    <>
      <div id="top"></div>
      <Header onLogin={() => setModal('login')} onStart={() => setModal('install')} />
      <main>
        <AppHero onInstall={() => setModal('install')} />
        <Pricing />
        <Reviews onWrite={() => setModal('review')} />
        <Support />
        <MoreApps />
      </main>
      <CtaBand onStart={() => setModal('install')} />
      <Footer />

      <Modal open={modal === 'login'} title={`Đăng nhập vào ${APP.brand}`} onClose={close}>
        <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="login-email">Email</label>
          <input id="login-email" type="email" placeholder="ban@congty.vn" />
          <button type="submit" className="btn-install">Đăng nhập</button>
          <a href="#top" className="link-underline modal-link">Đăng nhập nhà phát triển</a>
        </form>
      </Modal>

      <Modal open={modal === 'install'} title={`Cài đặt ${APP.brand}`} onClose={close}>
        <p className="modal-text">Tạo tài khoản để bắt đầu dùng thử miễn phí 14 ngày, không cần thẻ thanh toán.</p>
        <div className="modal-actions">
          <button type="button" className="btn-install">Tạo tài khoản {APP.brand}</button>
          <button type="button" className="btn-outline wide" onClick={() => setModal('login')}>
            Đăng nhập tài khoản có sẵn
          </button>
        </div>
      </Modal>

      <Modal open={modal === 'review'} title="Viết đánh giá" onClose={close}>
        <p className="modal-text">Bạn cần đăng nhập và đã sử dụng {APP.brand} để viết đánh giá.</p>
        <div className="modal-actions">
          <button type="button" className="btn-install" onClick={() => setModal('login')}>Đăng nhập</button>
        </div>
      </Modal>
    </>
  );
}
