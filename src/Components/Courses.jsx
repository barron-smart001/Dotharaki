import { useState } from 'react';
import coursesData from '../Data/courseData'; // Make sure this path exactly matches your data file

export default function CourseCatalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortOption, setSortOption] = useState('Relevance');

  // Filter & Sort Logic
  const filteredCourses = coursesData
    .filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || course.level === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOption === 'Price: Low to High') return a.price - b.price;
      if (sortOption === 'Price: High to Low') return b.price - a.price;
      if (sortOption === 'Highest Rated') return b.rating - a.rating;
      return 0; 
    });

  const getBadgeClasses = (color) => {
    if (color === 'purple') return 'bg-purple-50 text-purple-700 border-purple-200/50';
    if (color === 'blue') return 'bg-blue-50 text-blue-700 border-blue-200/50';
    return 'bg-emerald-50 text-emerald-700 border-emerald-200/50';
  };

  return (
    <div className="max-w-[1200px] mx-40 px-6 py-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Course Catalog</h2>
      
      {/* Controls Row */}
      <div className="flex gap-4 mb-8 flex-wrap">
        <input 
          type="text" 
          placeholder="Search courses by title..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-slate-400"
        />
        
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white"
        >
          <option>All Categories</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <select 
          value={sortOption} 
          onChange={(e) => setSortOption(e.target.value)}
          className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white"
        >
          <option>Relevance</option>
          <option>Highest Rated</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      {/* Grid Layout rendering directly from your coursesData array elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <div key={course.id} className="border border-slate-100 rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition duration-200">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-bold text-slate-900 text-lg leading-snug">{course.title}</h3>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${getBadgeClasses(course.levelColor)} shrink-0`}>
                    {course.level}
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">{course.description}</p>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-semibold text-slate-600 border border-slate-200">
                    {course.instructor?.initials}
                  </div>
                  <span className="text-sm text-slate-500 font-medium">{course.instructor?.name}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-slate-500 font-medium border-t border-slate-50 pt-4">
                <div className="flex items-center gap-1">
                  <span className="text-amber-500">★</span>
                  <span className="text-slate-700 font-semibold">{course.rating}</span>
                </div>
                <div>{course.duration}</div>
                <div className="text-slate-900 font-bold text-base">${course.price}</div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-slate-400 py-12">No courses found.</p>
        )}
      </div>
    </div>
  );
}
