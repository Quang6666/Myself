
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pkg from 'pg';
import bcrypt from 'bcrypt';
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: 'postgres', // sửa lại user nếu cần
  host: 'localhost',
  database: 'mystart', // sửa lại tên db nếu cần
  password: '1', // sửa lại password
  port: 5432,
});

// Đăng ký
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) return res.status(400).json({ error: 'Thiếu thông tin' });
  try {
    const userCheck = await pool.query('SELECT * FROM users WHERE username = $1 OR email = $2', [username, email]);
    if (userCheck.rows.length > 0) return res.status(400).json({ error: 'Username hoặc email đã tồn tại' });
    const hash = await bcrypt.hash(password, 10);
    await pool.query('INSERT INTO users (username, password, email) VALUES ($1, $2, $3)', [username, hash, email]);
    res.json({ message: 'Đăng ký thành công!' });
  } catch (err) {
    res.status(500).json({ error: 'Lỗi server' });
  }
});


// Đăng nhập
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ success: false, message: 'Thiếu thông tin' });
  try {
    const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (user.rows.length === 0) return res.status(400).json({ success: false, message: 'Sai thông tin đăng nhập' });
    const valid = await bcrypt.compare(password, user.rows[0].password);
    if (!valid) return res.status(400).json({ success: false, message: 'Sai thông tin đăng nhập' });
    res.json({ success: true, message: 'Đăng nhập thành công!', user: { id: user.rows[0].id, username: user.rows[0].username, email: user.rows[0].email } });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Lỗi server' });
  }
});

// Quên mật khẩu
app.post('/api/forgot-password', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ success: false, message: 'Thiếu email' });
  try {
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (user.rows.length === 0) return res.status(400).json({ success: false, message: 'Email không tồn tại trong hệ thống' });
    // Ở đây bạn có thể gửi email thực tế, demo chỉ trả về thành công
    res.json({ success: true, message: 'Đã gửi hướng dẫn đặt lại mật khẩu tới email!' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Lỗi server' });
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
