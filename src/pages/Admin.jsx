import React, { useState, useEffect } from 'react';

// Demo API, bạn nên thay bằng API thực tế
async function fetchUsers() {
  const res = await fetch('http://localhost:4000/api/users');
  return res.json();
}
async function fetchProducts() {
  const res = await fetch('http://localhost:4000/api/products');
  return res.json();
}

export default function Admin() {
  const [tab, setTab] = useState('users');
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (tab === 'users') fetchUsers().then(setUsers);
    if (tab === 'products') fetchProducts().then(setProducts);
  }, [tab]);

  return (
    <div style={{ minHeight: '100vh', background: '#f3f4f6', padding: 32 }}>
      <div style={{ maxWidth: 900, margin: '0 auto', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: 32 }}>
        <h2 style={{ color: '#6366f1', marginBottom: 24 }}>Admin Dashboard</h2>
        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          <button onClick={() => setTab('users')} style={{ padding: '8px 24px', borderRadius: 8, background: tab === 'users' ? '#6366f1' : '#e0e7ff', color: tab === 'users' ? '#fff' : '#6366f1', border: 'none', fontWeight: 600 }}>Người dùng</button>
          <button onClick={() => setTab('products')} style={{ padding: '8px 24px', borderRadius: 8, background: tab === 'products' ? '#6366f1' : '#e0e7ff', color: tab === 'products' ? '#fff' : '#6366f1', border: 'none', fontWeight: 600 }}>Sản phẩm</button>
        </div>
        {tab === 'users' && (
          <div>
            <h3>Danh sách người dùng</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}>
              <thead>
                <tr style={{ background: '#e0e7ff' }}>
                  <th style={{ padding: 8 }}>ID</th>
                  <th style={{ padding: 8 }}>Username</th>
                  <th style={{ padding: 8 }}>Email</th>
                  <th style={{ padding: 8 }}>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {users.map(u => (
                  <tr key={u.id}>
                    <td style={{ padding: 8 }}>{u.id}</td>
                    <td style={{ padding: 8 }}>{u.username}</td>
                    <td style={{ padding: 8 }}>{u.email}</td>
                    <td style={{ padding: 8 }}>
                      <button style={{ marginRight: 8 }}>Sửa</button>
                      <button>Xóa</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {tab === 'products' && (
          <div>
            <h3>Danh sách sản phẩm</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}>
              <thead>
                <tr style={{ background: '#e0e7ff' }}>
                  <th style={{ padding: 8 }}>ID</th>
                  <th style={{ padding: 8 }}>Tên</th>
                  <th style={{ padding: 8 }}>Giá</th>
                  <th style={{ padding: 8 }}>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {products.map(p => (
                  <tr key={p.id}>
                    <td style={{ padding: 8 }}>{p.id}</td>
                    <td style={{ padding: 8 }}>{p.name}</td>
                    <td style={{ padding: 8 }}>{p.price}</td>
                    <td style={{ padding: 8 }}>
                      <button style={{ marginRight: 8 }}>Sửa</button>
                      <button>Xóa</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
