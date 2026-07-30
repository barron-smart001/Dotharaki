
import { Link } from 'react-router-dom';
import  courseCard  from '../Data/Course'; 

const FeaturedCourses = () => {
  
  const getLevelStyles = (level) => {
    if (level?.toLowerCase() === 'advanced') {
      return "bg-purple-50 text-purple-700 border-purple-200/50";
    }
    if (level?.toLowerCase() === 'intermediate') {
      return "bg-blue-50 text-blue-700 border-blue-200/50";
    }
    
    return "bg-emerald-50 text-emerald-700 border-emerald-200/50";
  };

  return (
    <section className="px-6 md:px-[180px] py-12 bg-white">
      
     

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* FIX: Changed "courses.slice" to "courseCard.slice" to match your import variable */}
        {courseCard.slice(0, 3).map((course) => (
          <div 
            key={course.id} 
            className="border border-slate-100 rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition duration-200"
          >
            <div>
              {/* Card Title & Dynamic Badge Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-bold text-slate-900 leading-snug text-base lg:text-lg">
                  {course.title}
                </h3>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${getLevelStyles(course.level)} shrink-0`}>
                  {course.level}
                </span>
              </div>

              {/* Description Body */}
              <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {course.description}
              </p>

              {/* Author Info Section */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-semibold text-slate-600 border border-slate-200">
                  {course.authorInitials || course.authorName?.substring(0, 2).toUpperCase()}
                </div>
                <span className="text-sm text-slate-500 font-medium">{course.authorName}</span>
              </div>
            </div>

            {/* Bottom Section (Metrics & Action Button) */}
            <div>
              {/* Rating, Duration, and Price Row */}
              <div className="flex items-center justify-between text-sm text-slate-500 font-medium mb-4 border-t border-slate-50 pt-4">
                <div className="flex items-center gap-1">
                  <span className="text-amber-500 text-base">★</span>
                  <span className="text-slate-700 font-semibold">{course.rating}</span>
                </div>
                <div>{course.duration}</div>
                <div className="text-slate-900 font-bold text-base">{course.price}</div>
              </div>

              {/* Action Button */}
              <Link 
                to={`/courses/${course.id}`}
                className="block w-full text-center bg-slate-50 hover:bg-slate-100 text-slate-800 text-sm font-semibold py-2.5 rounded-lg border border-slate-100 transition"
              >
                View Details
              </Link>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default FeaturedCourses;
