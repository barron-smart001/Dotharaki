import { useNavigate } from "react-router-dom";

export default function Dashboard({ user, onLogout }) {
  const navigate = useNavigate();


  const username = user?.name || "";
  const userInitials = username.substring(0, 2).toUpperCase();

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      
      <aside className="w-64 bg-[#0f172a] text-white p-6 flex flex-col justify-between shrink-0">
        <div className="space-y-6">
          <div className="text-xl font-bold tracking-tight px-3">StudentHub</div>
          <nav className="flex flex-col gap-1">
            <button className="w-full text-left bg-slate-800 text-white font-medium px-4 py-2.5 rounded-lg text-sm transition">
              Dashboard
            </button>
            <button className="w-full text-left text-slate-400 hover:text-white font-medium px-4 py-2.5 rounded-lg text-sm transition">
              My Courses
            </button>
            <button className="w-full text-left text-slate-400 hover:text-white font-medium px-4 py-2.5 rounded-lg text-sm transition">
              Profile
            </button>
            <button className="w-full text-left text-slate-400 hover:text-white font-medium px-4 py-2.5 rounded-lg text-sm transition">
              Settings
            </button>
          </nav>
        </div>

        <div className="space-y-2">
          <button 
            onClick={() => navigate("/")}
            className="w-full text-center bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold py-2 rounded-lg border border-slate-700 transition"
          >
            ← Back to Home
          </button>
          <button 
            onClick={onLogout}
            className="w-full text-center bg-white hover:bg-slate-100 text-slate-900 text-xs font-semibold py-2 rounded-lg border border-slate-200 transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* 2. Main Content Window */}
      <main className="flex-1 p-10 max-w-7xl mx-auto w-full">
        
        {/* Top Header Row */}
        <header className="flex justify-between items-center mb-8 border-b border-slate-200 pb-4">
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-700">
              {userInitials}
            </div>
            <span className="text-sm font-semibold text-slate-700">{username}</span>
          </div>
        </header>

        {/* Welcome Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Welcome back, {username}</h2>
          <p className="text-slate-500 text-sm mt-1">Here's where you left off.</p>
        </section>

        {/* 3. Grid Metrics Row */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Box 1 */}
          <div className="bg-white border border-slate-100 p-6 rounded-xl shadow-xs flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Enrolled Courses</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-2">0</h3>
            </div>
            <span className="text-2xl">📚</span>
          </div>
          {/* Box 2 */}
          <div className="bg-white border border-slate-100 p-6 rounded-xl shadow-xs flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Completed Courses</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-2">0</h3>
            </div>
            <span className="text-2xl">🎓</span>
          </div>
          {/* Box 3 */}
          <div className="bg-white border border-slate-100 p-6 rounded-xl shadow-xs flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Favorites</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-2">1</h3>
            </div>
            <span className="text-2xl">❤️</span>
          </div>
          {/* Box 4 */}
          <div className="bg-white border border-slate-100 p-6 rounded-xl shadow-xs flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Average Progress</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-2">0%</h3>
            </div>
            <span className="text-2xl">📈</span>
          </div>
        </section>

        {/* 4. Lower Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Block: Learning Progress Placeholder */}
          <div className="lg:col-span-2 bg-white border border-slate-100 rounded-xl p-8 flex flex-col items-center justify-center min-h-[300px] text-center">
            <span className="text-4xl mb-4">📚</span>
            <h4 className="text-lg font-bold text-slate-900">No courses yet</h4>
            <p className="text-sm text-slate-400 max-w-sm mt-1 mb-6">Enroll in a course to start tracking your progress here.</p>
            <button 
              onClick={() => navigate("/courses")}
              className="bg-[#0f172a] hover:bg-slate-800 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition"
            >
              Browse Courses
            </button>
          </div>

          {/* Right Block: Recent Activity Panel */}
          <div className="bg-white border border-slate-100 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-4">Recent Activity</h4>
              <div className="space-y-4">
                <div className="flex gap-3 text-sm">
                  <span className="text-slate-400">🗑️</span>
                  <div>
                    <p className="text-slate-700 font-medium">Removed Advanced JavaScript</p>
                    <span className="text-xs text-slate-400">10 hours ago</span>
                  </div>
                </div>
                <div className="flex gap-3 text-sm">
                  <span className="text-slate-400">🗑️</span>
                  <div>
                    <p className="text-slate-700 font-medium">Removed React Fundamentals</p>
                    <span className="text-xs text-slate-400">10 hours ago</span>
                  </div>
                </div>
                <div className="flex gap-3 text-sm">
                  <span className="text-blue-500">🔷</span>
                  <div>
                    <p className="text-slate-700 font-medium">Enrolled in Advanced JavaScript</p>
                    <span className="text-xs text-slate-400">3 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
