import React, { useState } from 'react';
import viteLogo from '/vite.svg';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setMessage('Đăng ký thành công (demo)!');
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #e0e7ff 0%, #f3f4f6 100%)' }}>
      <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: 32, width: '100%', maxWidth: 380 }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <img src={viteLogo} alt="Logo" style={{ width: 56, marginBottom: 8 }} />
          <h2 style={{ fontWeight: 700, color: '#6366f1', margin: 0 }}>Đăng ký tài khoản</h2>
          <p style={{ color: '#6b7280', fontSize: 15, marginTop: 8 }}>Tạo tài khoản mới để sử dụng hệ thống</p>
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <input
            name="username"
            placeholder="Tên đăng nhập"
            value={form.username}
            onChange={handleChange}
            required
            style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid #d1d5db', fontSize: 16 }}
            autoComplete="username"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid #d1d5db', fontSize: 16 }}
            autoComplete="email"
          />
          <input
            name="password"
            type="password"
            placeholder="Mật khẩu"
            value={form.password}
            onChange={handleChange}
            required
            style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid #d1d5db', fontSize: 16 }}
            autoComplete="new-password"
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '10px 0',
              borderRadius: 8,
              background: '#6366f1',
              color: '#fff',
              fontWeight: 600,
              fontSize: 16,
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              boxShadow: '0 2px 8px rgba(99,102,241,0.08)'
            }}
          >
            {loading ? 'Đang xử lý...' : 'Đăng ký'}
          </button>
        </form>
        {message && (
          <div style={{ marginTop: 18, textAlign: 'center', color: '#10b981', fontWeight: 500 }}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
