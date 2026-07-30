import Footer from "./Footer";

export default function AboutSection() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-between font-sans">
      

      <div className="max-w-6xl w-full mx-auto px-6 py-15 flex-grow">
        <div className="max-w-130  mx-50">
          <h2 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
            About Student Hub
          </h2>
          
          <p className="text-[14px] text-slate-500 leading-relaxed font-light">
            Student Hub is a capstone learning-management project built with React, React Router DOM, 
            Context API, and Tailwind CSS — with no external backend or state library.
          </p>
        </div>
      </div>

      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}
