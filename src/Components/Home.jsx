
import { Link } from "react-router-dom"
import FeaturedCourses from './StillCards'
import CategoryDisplay from "./Category"
import OmorLead from "./OmorLead"
import StudentTestimonials from "./StudentsInputs"
import Footer from "./Footer"

const Home = () => {
  return (
    <>

      <div className=" relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-16 text-center text-white sm:px-12 sm:py-18.5 md:mx-45 mx-5 mt-4  md:h-120 md:mt-8 md:mb-4-70">

        <div className="max-w-2xl mx-auto flex flex-col items-center p " >
          {/* Main Heading */}
          <h1 className="text-3xl font-bold tracking-tight text-white  sm:text-5xl md:text-5xl ">
            Learn the skills that move your career forward
          </h1>

          <p className="mt-4 text-base  text-gray-300 sm:text-lg max-w-2xl">
            Student Hub brings together practical, instructor-led courses across web development, data science, design, and more — track your progress every step of the way.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/courses"
            className="rounded-lg bg-[#111625] px-6 py-3 text-sm font-medium text-white border border-slate-800 hover:bg-slate-900 transition"
          >
            Browse Courses
          </Link>
          <Link
            to="/register"
            className="  inline-flex items-center justify-center rounded-md  font-medium transition-all active:opacity-50 disabled:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible-ring-off set-2 dark:focus-focus-visible:ring-gray-100 dark:focus-visible:ring-offset-2 px-5 py-2.5 text-base    border border-slate-600 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition"
          >
            Create Free Account
          </Link>
        </div>

        <div className="mt-8  flex flex-wrap items-center justify-center gap-2">
          <span className=" inline-flex  items-center rounded-full bg-white/10   px-2.5 py-0.5 text-xs font-medium text-white">
            20+ Courses
          </span>
          <span className=" inline-flex  items-center rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white">
            8 Categories
          </span>
          <span className=" inline-flex  items-center rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white">
            Beginner to Advanced
          </span>
        </div>
      </div>


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


        <CategoryDisplay />


      </div>

      <div className="">


        <StudentTestimonials />



      </div>
      <OmorLead />




      <Footer />

    </>
  )
}

export default Home
