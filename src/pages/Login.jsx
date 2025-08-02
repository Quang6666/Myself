import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, forgotPassword } from '../api/auth';
import viteLogo from '/vite.svg';

export default function Login() {
  const navigate = useNavigate();
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotMsg, setForgotMsg] = useState('');
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await login(form);
      if (res.success) {
        setMessage('Đăng nhập thành công!');
        if (res.user && res.user.role_id === 1) {
          setTimeout(() => navigate('/admin'), 800);
        }
      } else {
        setMessage(res.message || 'Sai thông tin đăng nhập!');
      }
    } catch (err) {
      setMessage('Lỗi kết nối server!');
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #e0e7ff 0%, #f3f4f6 100%)' }}>
      <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: 32, width: '100%', maxWidth: 380, position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <img src={viteLogo} alt="Logo" style={{ width: 56, marginBottom: 8 }} />
          <h2 style={{ fontWeight: 700, color: '#6366f1', margin: 0 }}>Đăng nhập hệ thống</h2>
          <p style={{ color: '#6b7280', fontSize: 15, marginTop: 8 }}>Chào mừng bạn quay lại!</p>
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
            name="password"
            type="password"
            placeholder="Mật khẩu"
            value={form.password}
            onChange={handleChange}
            required
            style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid #d1d5db', fontSize: 16 }}
            autoComplete="current-password"
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
            {loading ? 'Đang xử lý...' : 'Đăng nhập'}
          </button>
        </form>
        <div style={{ marginTop: 10, textAlign: 'right' }}>
          <button type="button" style={{ background: 'none', border: 'none', color: '#6366f1', fontSize: 15, cursor: 'pointer', textDecoration: 'underline', padding: 0 }} onClick={() => setShowForgot(true)}>
            Quên mật khẩu?
          </button>
        </div>
        {message && (
          <div style={{ marginTop: 18, textAlign: 'center', color: message.includes('thành công') ? '#10b981' : '#ef4444', fontWeight: 500 }}>
            {message}
          </div>
        )}
        {showForgot && (
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(240,245,255,0.95)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(99,102,241,0.10)', padding: 24, width: '90%', maxWidth: 320, textAlign: 'center' }}>
              <h3 style={{ color: '#6366f1', marginBottom: 12 }}>Quên mật khẩu?</h3>
              <p style={{ color: '#6b7280', fontSize: 15, marginBottom: 16 }}>Nhập email để nhận hướng dẫn đặt lại mật khẩu.</p>
              <input
                type="email"
                placeholder="Email của bạn"
                value={forgotEmail}
                onChange={e => setForgotEmail(e.target.value)}
                style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid #d1d5db', fontSize: 16, width: '80%', marginBottom: 12 }}
              />
              <button
                type="button"
                style={{
                  padding: '10px 0',
                  borderRadius: 8,
                  background: '#6366f1',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 16,
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%'
                }}
                onClick={async () => {
                  if (!forgotEmail.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
                    setForgotMsg('Email không hợp lệ!');
                  } else {
                    setForgotMsg('Đang gửi yêu cầu...');
                    try {
                      const res = await forgotPassword(forgotEmail);
                      if (res.success) {
                        setForgotMsg('Đã gửi hướng dẫn đặt lại mật khẩu tới email!');
                      } else {
                        setForgotMsg(res.message || 'Không thể gửi yêu cầu!');
                      }
                    } catch (err) {
                      setForgotMsg('Lỗi kết nối server!');
                    }
                  }
                }}
              >
                Gửi yêu cầu
              </button>
              {forgotMsg && <div style={{ marginTop: 10, color: forgotMsg.includes('Đã gửi') ? '#10b981' : '#ef4444', fontWeight: 500 }}>{forgotMsg}</div>}
              <button type="button" style={{ marginTop: 18, background: 'none', border: 'none', color: '#6366f1', fontSize: 15, cursor: 'pointer', textDecoration: 'underline', padding: 0 }} onClick={() => { setShowForgot(false); setForgotEmail(''); setForgotMsg(''); }}>
                Đóng
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
