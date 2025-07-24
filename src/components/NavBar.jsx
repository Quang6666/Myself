import React from 'react';
import './NavBar.css';

export default function NavBar({ page, setPage }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>
      <ul className="navbar-links">
        <li>
          <button className={page === 'home' ? 'active' : ''} onClick={() => setPage('home')}>Trang chủ</button>
        </li>
        <li>
          <button className={page === 'login' ? 'active' : ''} onClick={() => setPage('login')}>Đăng nhập</button>
        </li>
        <li>
          <button className={page === 'register' ? 'active' : ''} onClick={() => setPage('register')}>Đăng ký</button>
        </li>
      </ul>
    </nav>
  );
}
