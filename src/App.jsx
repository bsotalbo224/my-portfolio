import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {
  const [isDark, setIsDark] = useState(false);

  // Listen for theme changes from ThemeToggle component
  useEffect(() => {
    // Set initial theme state
    const currentTheme = localStorage.getItem('theme');
    setIsDark(currentTheme === 'dark');

    const handleThemeChange = () => {
      const currentTheme = localStorage.getItem('theme');
      setIsDark(currentTheme === 'dark');
    };

    // Listen for theme change events from ThemeToggle
    window.addEventListener('themeChange', handleThemeChange);

    return () => {
      window.removeEventListener('themeChange', handleThemeChange);
    };
  }, []);

  return (
    <>     
      {/* Router setup */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home isDark={isDark} />} />
          <Route path="*" element={<NotFound isDark={isDark} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;