import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './styles.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Practice from './pages/Practice';
import Leaderboard from './pages/Leaderboard';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [user, setUser] = useState(null);


  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Sidebar
        visible={showSidebar}
        toggleSidebar={toggleSidebar}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;








