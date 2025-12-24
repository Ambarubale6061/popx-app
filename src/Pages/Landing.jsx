import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Landing() {
  const navigate = useNavigate();
  const [clickedDot, setClickedDot] = useState(null);

  const dots = [
    { id: 6, top: "90px", left: "90px" },
    { id: 1, top: "150px", left: "160px" },
    { id: 2, top: "190px", left: "170px" },
    { id: 3, top: "230px", left: "210px" },
    { id: 4, top: "270px", left: "250px" },
    { id: 5, top: "320px", left: "290px" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="relative max-w-[375px] w-full h-[667px] bg-[#f7f8f9] border border-gray-200 shadow-sm flex flex-col justify-end p-5 overflow-hidden">
        {dots.map((dot, index) => (
          <div
            key={index}
            onClick={() => setClickedDot(index)}
            style={{
              top: dot.top,
              left: dot.left,
              transition: "all 0.3s ease",
            }}
            className={`absolute w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer
              ${clickedDot === index ? "bg-blue-600" : "bg-[#fbbd08]"} 
              hover:bg-blue-500 shadow-sm hover:scale-110`}
          >
            {dot.id}
          </div>
        ))}

        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-[#1d2129] leading-tight mb-2">
            Welcome to PopX
          </h1>
          <p className="text-[17px] text-[#828282] leading-snug">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit,
          </p>
        </div>

        <div className="flex flex-col gap-3 mb-6">
          <button
            onClick={() => navigate("/signup")}
            className="w-full bg-[#6c25ff] hover:bg-[#5a1ee0] text-white font-semibold py-3.5 rounded-md transition-all text-[15px]"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/login")}
            className="w-full bg-[#cebafb] hover:bg-[#c2a9fa] text-[#1d2129] font-bold py-3.5 rounded-md transition-all text-[15px]"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
