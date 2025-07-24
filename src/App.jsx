

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import './components/NavBar';
function App() {
  const [page, setPage] = useState('home');
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar page={page} setPage={setPage} />
      {page === 'home' && (
        <>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </>
      )}
      {page === 'login' && <Login />}
      {page === 'register' && <Register />}
    </>
  );
}

export default App;
