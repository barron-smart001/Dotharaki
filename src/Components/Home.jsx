
import { Link } from "react-router-dom"
import FeaturedCourses from './StillCards' 
import CategoryDisplay from "./Category"
import OmorLead from "./OmorLead"
import  StudentTestimonials  from "./StudentsInputs"
import Footer from "./Footer"

const Home = () => {
  return (
    <>
      {/* Main Hero Card Container */}
      <div className="mx-[40px] md:mx-[180px] mt-[32px] mb-[20px] rounded-3xl bg-gradient-to-br from-[#3a2bdf] via-[#0d111c] to-[#041e63] px-6 py-20 md:px-12 flex flex-col items-center text-center shadow-xl border border-slate-800/40">
        
        {/* Text content container */}
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Main Heading */}
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl md:leading-tight">
            Learn the skills that move your career forward
          </h1>

          {/* Subheading Description */}
          <p className="mt-6 text-sm font-light leading-relaxed text-slate-400 sm:text-base max-w-2xl">
            Student Hub brings together practical, instructor-led courses across web development, data science, design, and more — track your progress every step of the way.
          </p>
        </div>

        {/* Action Buttons Row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link 
            to="/courses" 
            className="rounded-lg bg-[#111625] px-6 py-3 text-sm font-medium text-white border border-slate-800 hover:bg-slate-900 transition"
          >
            Browse Courses
          </Link>
          <Link 
            to="/register" 
            className="rounded-lg border border-slate-600 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition"
          >
            Create Free Account
          </Link>
        </div>

        {/* Bottom Badge Metrics Row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium text-slate-300">
            20+ Courses
          </span>
          <span className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium text-slate-300">
            8 Categories
          </span>
          <span className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium text-slate-300">
            Beginner to Advanced
          </span>
        </div>
      </div>


        {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between md:mb-8 mb-0 mt-[72px] gap-2 md:mx-45 mx-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Featured Courses</h2>
                <p className="text-sm text-slate-500 mt-1">Top-rated courses handpicked to get you started.</p>
              </div>
              <Link to="/courses" className="text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-700 transition">
                View all courses
              </Link>
            </div>
             <FeaturedCourses />





              <div className="flex flex-col sm:flex-row sm:items-end justify-between md:mb-8 mb-0 mt-[72px] gap-2 md:mx-45 mx-6">
              

                <CategoryDisplay/>
              
              
            </div>

<div className="flex flex-col sm:flex-row sm:items-end justify-between md:mb-8 mb-0 mt-[72px] gap-2 md:mx-45 mx-6">
              

                <StudentTestimonials/>
            
              
           
            </div>

            <OmorLead />


<Footer />
     
    </>
  )
}

export default Home
