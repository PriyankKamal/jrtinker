import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../Context/Auth";
import { MdMenu, MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import NavbarTop from "./NavbarTop";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "For Kids" },
    { path: "/stemlab", label: "For Schools" },
    { path: "/products", label: "Products" },
    { path: "/projects", label: "Projects" },
  ];

  const programLinks = [
    { path: "/cbse-info", label: "CBSE" },
    { path: "/icse-info", label: "ICSE" },
    { path: "/igcse-info", label: "IGCSE" },
    { path: "/state-board-info", label: "State Board" },
    { path: "/foundation-info", label: "Foundation" },
    { path: "/jee-neet-info", label: "JEE/NEET" },
  ];

  const isProgramsActive = programLinks.some(
    (link) => location.pathname === link.path
  );

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY <= lastScrollY + 0.7);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -200 }}
      transition={{ duration: 0.3, ease: "linear" }}
      className="w-full fixed z-[900] shadow-md h-auto bg-white"
    >
      <NavbarTop />

      {/* Desktop Menu */}
      <div className="relative w-full hidden md:flex items-center justify-center mt-2">
        <img
          src="/images/background/bg-menu.png"
          alt="menu"
          className="relative"
        />
        <div className="w-full flex items-center justify-center absolute text-base lg:text-xl text-white gap-4 lg:gap-6 uppercase">
          {navLinks.map((e, idx) => (
            <Link
              key={idx}
              to={`${e.path}`}
              className="salsa hover:text-pink-200 transition-colors"
            >
              {e.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end px-4 py-2">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-[#33467b] p-2"
        >
          {mobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col py-2">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="px-6 py-3 text-[#33467b] hover:bg-gray-100 salsa"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="px-6 py-3">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center text-[#33467b] salsa"
              >
                Programs <IoIosArrowDown className="ml-2" />
              </button>
              {dropdownOpen && (
                <div className="ml-4 mt-2">
                  {programLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="block py-2 text-[#33467b] hover:text-pink-500 salsa"
                      onClick={() => {
                        setDropdownOpen(false);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Auth Links */}
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  className="px-6 py-3 text-[#33467b] hover:bg-gray-100 salsa"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Profile
                </Link>
                <Link
                  to="/logout"
                  className="px-6 py-3 text-[#33467b] hover:bg-gray-100 salsa"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-6 py-3 text-[#33467b] hover:bg-gray-100 salsa"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-6 py-3 text-[#33467b] hover:bg-gray-100 salsa"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
