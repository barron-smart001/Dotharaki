import { Students } from '../Data/stInputs'; 

export default function StudentTestimonials() {
  // Helper to extract name initials (e.g., "Ada Lovelace" -> "AL")
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 font-sans">
      {/* Centered Heading */}
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
        What Our Students Say
      </h2>
      
      {/* Grid Layout: 1 column on mobile, 2 columns from 'md' breakpoint up */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 items-center">
        {Students.map((student) => (
          <div 
            key={student.id} 
            className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm flex flex-col justify-between"
          >
            {/* Review Description */}
            <p className="text-slate-600 leading-relaxed text-[15.5px] mb-7">
              "{student.description}"
            </p>
            
            {/* User Profile Footer Row */}
            <div className="flex items-center gap-4">
              {/* Circular Initials Badge */}
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 font-semibold flex items-center justify-center text-sm tracking-wider shrink-0">
                {getInitials(student.authorName)}
              </div>
              
              {/* Name and Rating Details */}
              <div className="flex flex-col">
                <h4 className="font-bold text-slate-900 text-base leading-snug">
                  {student.authorName}
                </h4>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-amber-500 text-lg leading-none">★</span>
                  <span className="text-slate-500 text-sm font-medium">
                    {student.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
