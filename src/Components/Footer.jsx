import { Link } from "react-router-dom"; // Use standard <a> tags if not using react-router

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-100 font-sans text-sm text-slate-600">
      {/* Top Section: Main Footer Links */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Column 1: Brand Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-bold text-slate-900">Student Hub</h3>
          <p className="leading-relaxed text-slate-500 max-w-[240px]">
            Learn practical skills with courses built by working practitioners.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">Quick Links</h3>
          <ul className="flex flex-col gap-2.5">
            <li><Link to="/" className="hover:text-slate-900 transition-colors">Home</Link></li>
            <li><Link to="/courses" className="hover:text-slate-900 transition-colors">Courses</Link></li>
            <li><Link to="/about" className="hover:text-slate-900 transition-colors">About</Link></li>
          </ul>
        </div>

        {/* Column 3: Categories */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">Categories</h3>
          <ul className="flex flex-col gap-2.5">
            <li className="flex items-center gap-2">
              <span>🌐</span>
              <Link to="/categories/web-dev" className="hover:text-slate-900 transition-colors">Web Development</Link>
            </li>
            <li className="flex items-center gap-2">
              <span>📊</span>
              <Link to="/categories/data-science" className="hover:text-slate-900 transition-colors">Data Science</Link>
            </li>
            <li className="flex items-center gap-2">
              <span>📱</span>
              <Link to="/categories/mobile-dev" className="hover:text-slate-900 transition-colors">Mobile Development</Link>
            </li>
            <li className="flex items-center gap-2">
              <span>🎨</span>
              <Link to="/categories/ui-ux" className="hover:text-slate-900 transition-colors">UI/UX Design</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Action/Get Started */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">Get Started</h3>
          <p className="leading-relaxed text-slate-500">
            Create a free account to track your progress across every course.
          </p>
          <Link to="/register" className="font-semibold text-slate-900 underline decoration-2 underline-offset-4 hover:text-slate-700 transition-colors mt-1">
            Register now
          </Link>
        </div>

      </div>

      {/* Bottom Section: Copyright */}
      <div className="w-full border-t border-slate-100 py-6 text-center text-xs text-slate-400">
        © 2026 Student Hub
      </div>
    </footer>
  );
}

