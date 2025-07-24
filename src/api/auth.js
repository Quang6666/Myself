// src/api/auth.js

export async function login({ username, password }) {
  // Gửi request đăng nhập lên server
  const res = await fetch('http://localhost:4000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  return res.json();
}

export async function register({ username, email, password }) {
  // Gửi request đăng ký lên server
  const res = await fetch('http://localhost:4000/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password })
  });
  return res.json();
}

export async function forgotPassword(email) {
  // Gửi request quên mật khẩu lên server
  const res = await fetch('/api/auth/forgot-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  return res.json();
}
