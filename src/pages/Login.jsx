import React, { useState } from 'react';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Gửi dữ liệu đăng nhập lên server tại đây
    if (form.username === 'admin' && form.password === 'admin123') {
      setMessage('Đăng nhập thành công (demo)!');
    } else {
      setMessage('Sai thông tin đăng nhập!');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto' }}>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Tên đăng nhập" value={form.username} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Mật khẩu" value={form.password} onChange={handleChange} required />
        <button type="submit">Đăng nhập</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
