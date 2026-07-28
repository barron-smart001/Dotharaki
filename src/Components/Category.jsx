import { Categories } from "../Data/Category";

export default function CategoryDisplay() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header Section */}
            <h2 className="text-2xl font-bold text-slate-800 mb-1">Popular Categories</h2>
            <p className="text-sm text-slate-500 mb-8">Browse courses by the skills you want to build.</p>

            {/* Grid Wrapper */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {Categories.map((category) => {
                    return (
                        <div 
                         key={category.id} 
                            className="flex flex-col items-center justify-center p-6 text-center bg-white rounded-lg border border-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
                        >
                            <div className="text-3xl mb-4">
                                {category.icon}
                            </div>
                            <h3 className="text-base font-semibold text-slate-800 mb-2">
                                {category.category}
                            </h3>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                {category.body}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
