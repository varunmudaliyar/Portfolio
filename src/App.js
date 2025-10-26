import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

// Import your page components
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';

// Dark Mode Toggle Component
function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
}

function AppContent() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-500"
            >
              Varun Mudaliyar
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`font-medium transition-colors ${
                  isActive('/') ? 'text-teal-500 dark:text-teal-400' : 'text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400'
                }`}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className={`font-medium transition-colors ${
                  isActive('/projects') ? 'text-orange-500 dark:text-orange-400' : 'text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400'
                }`}
              >
                Projects
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors ${
                  isActive('/about') ? 'text-teal-500 dark:text-teal-400' : 'text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400'
                }`}
              >
                About
              </Link>

              {/* Dark Mode Toggle */}
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 dark:text-gray-300"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 flex flex-col py-20 px-6 space-y-6 text-lg font-medium text-white">
              <Link to="/" className={isActive('/') ? 'text-teal-500' : 'hover:text-teal-300'} onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/projects" className={isActive('/projects') ? 'text-orange-400' : 'hover:text-orange-300'} onClick={() => setMobileMenuOpen(false)}>Projects</Link>
              <Link to="/about" className={isActive('/about') ? 'text-teal-500' : 'hover:text-teal-300'} onClick={() => setMobileMenuOpen(false)}>About</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400">
            I Like to Build Things
          </h3>
          <p className="text-gray-400 mb-6">
            Let's <span className="text-orange-500">Connect</span>
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            {/* Social Icons */}
            <a href="mailto:mudaliyarvarun21@gmail.com" className="text-red-400 hover:text-red-300 transition-colors text-2xl" aria-label="Email">
              ✉
            </a>
            <a href="https://github.com/varunmudaliyar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-2xl" aria-label="GitHub">
              🐱
            </a>
            <a href="https://linkedin.com/in/varunmudaliyar" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors text-2xl" aria-label="LinkedIn">
              in
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2025  Varun Mudaliyar · All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
