import { useState } from "react";
import Footer from "./Footer";

export default function Register() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered Account:", formData);
  };

  return (
    <>
    <div className="max-w-md w-full mx-auto px-6 py-5 font-sans min-h-2xl">
      <h2 className="text-xl font-bold text-[#0f172a] mb-6 tracking-tight">Register</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-500">Name</label>
          <input type="text" name="name" onChange={handleChange} required className="w-full h-10 px-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-slate-400" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-500">Email</label>
          <input type="email" name="email" onChange={handleChange} required className="w-full h-10 px-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-slate-400" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-500">Password</label>
          <input type="password" name="password" onChange={handleChange} required className="w-full h-10 px-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-slate-400" />
        </div>

        <button type="submit" className="w-full h-11 bg-[#0f172a] text-white font-medium text-sm rounded-lg mt-2">
          Create account
        </button>
      </form>

      
    </div>

     <div className="w-full mt-auto">
        <Footer />
      </div>
    </>
  );
}
