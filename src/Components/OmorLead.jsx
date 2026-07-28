import { Omor } from "../Data/omorCards";

export default function Lastnig (){



return(

      <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Responsive Grid: 1 col on mobile, 2 on tablets, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Omor.map((omorCards) => (
          <div
            key={omorCards.id}
            className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex justify-between items-end min-h-[100px]"
          >
            {/* Left side text column */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-slate-400">
                {omorCards.label}
              </span>
              <span className="text-2xl font-bold text-slate-800 tracking-tight">
                {omorCards.value}
              </span>
            </div>

            {/* Right side icon */}
            <div className="text-3xl select-none pb-0.5">
              {omorCards.icon}
            </div>
          </div>
        ))}
      </div>
    </div>

)

}