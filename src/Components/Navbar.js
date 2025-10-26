import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage or system preference
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full top-0 bg-beige-50/90 dark:bg-deepBlue-900/90 backdrop-blur z-50 border-b border-beige-300 dark:border-deepBlue-700">
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex justify-between items-center">
          {/* Brand Name */}
          <a
            href="/"
            className="text-lg sm:text-2xl font-semibold text-beige-700 dark:text-beige-200 tracking-wide hover:no-underline"
          >
            Varun Mudaliyar
          </a>

          {/* Nav Links */}
          <ul className="flex space-x-4 items-center">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end
                  className={({ isActive }) =>
                    `px-3 py-1 rounded-md transition font-medium ${
                      isActive
                        ? "text-teal-600 dark:text-teal-400"
                        : "text-beige-800 dark:text-beige-100 hover:text-teal-600 dark:hover:text-teal-400"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            {/* Dark Mode Toggle */}
            <li>
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="ml-2 p-2 rounded-md transition text-beige-700 dark:text-beige-100 hover:text-teal-600 dark:hover:text-teal-400"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
