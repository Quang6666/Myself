import React, { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Gửi dữ liệu đăng ký lên server tại đây
    setMessage('Đăng ký thành công (demo)!');
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto' }}>
      <h2>Đăng ký</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Tên đăng nhập" value={form.username} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Mật khẩu" value={form.password} onChange={handleChange} required />
        <button type="submit">Đăng ký</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
