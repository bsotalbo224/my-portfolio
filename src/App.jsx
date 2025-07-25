import { useState, useEffect } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    setIsDark(currentTheme === 'dark');

    const handleThemeChange = () => {
      const currentTheme = localStorage.getItem('theme');
      setIsDark(currentTheme === 'dark');
    };

    window.addEventListener('themeChange', handleThemeChange);
    return () => window.removeEventListener('themeChange', handleThemeChange);
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home isDark={isDark} />} />
        <Route path="*" element={<NotFound isDark={isDark} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
