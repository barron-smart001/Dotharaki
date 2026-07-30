import { useState } from 'react'
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation();
  // State to track if mobile hamburger menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  //Helper function to dynamically swap styling based on the active path

  const getLinkClass = (path) => {
    const baseClass = "px-4 py-2 rounded-lg text-sm font-medium transition duration-200";
    const activeClass = "bg-[#0f172a] text-white";
    const inactiveClass = "text-slate-600 hover:text-[#0f172a] hover:bg-slate-50";

    return `${baseClass} ${location.pathname === path ? activeClass : inactiveClass}`;
  };

  return (
    <nav className="sticky top-0 left-0 w-full bg-white border-b border-slate-100 relative z-50">
      {/* Main Navbar Top Row */}
      <div className="w-full h-[60px] px-6 md:px-[180px] flex items-center justify-between">

        {/* Brand Logo */}
        <div className="text-xl font-bold text-[#0f172a] tracking-tight">
          <Link to="/" onClick={() => setIsOpen(false)}>Student Hub</Link>
        </div>

        {/* Desktop Navigation Links (Hidden on mobile/tablet, flex on desktop) */}
        <div className="hidden lg:flex items-center gap-2">
          <Link to="/" className={getLinkClass("/")}>Home</Link>
          <Link to="/courses" className={getLinkClass("/courses")}>Courses</Link>
          <Link to="/about" className={getLinkClass("/about")}>About</Link>
          <Link to="/login" className={getLinkClass("/login")}>Login</Link>
          <Link to="/register" className={getLinkClass("/register")}>Register</Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl text-slate-700 p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile/Tablet Dropdown Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-[60px] left-0 w-full bg-white border-b border-slate-100 shadow-lg px-6 py-4 flex flex-col gap-2 transition-all">
          <Link to="/" className={getLinkClass("/")} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/courses" className={getLinkClass("/courses")} onClick={() => setIsOpen(false)}>
            Courses
          </Link>
          <Link to="/about" className={getLinkClass("/about")} onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/login" className={getLinkClass("/login")} onClick={() => setIsOpen(false)}>
            Login
          </Link>
          <Link to="/register" className={getLinkClass("/register")} onClick={() => setIsOpen(false)}>
            Register
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
