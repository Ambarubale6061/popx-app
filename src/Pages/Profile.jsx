import Profileimg from "../assets/profimg.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Profile() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    } else {
      navigate("/login");
      return;
    }
  }, [navigate]);

  return (
    <div className="flex justify-center items-start min-h-screen bg-[#f3f4f6] py-10 overflow-hidden">
      <div className="w-[375px]  bg-white border border-gray-300 shadow-sm overflow-hidden flex flex-col">
        <div className="px-6 py-5 border-b border-gray-100 bg-white">
          <h2 className="text-xl font-normal text-gray-700">
            Account Settings
          </h2>
        </div>

        <div className="bg-[#f8f9fb] px-6 py-8">
          <div className="flex gap-4 items-start mb-6">
            <div className="relative shrink-0">
              <img
                src={Profileimg}
                alt="Profile"
                className="w-[70px] h-[70px] object-cover rounded-full border border-gray-200"
              />

              <div className="absolute bottom-0 right-0 bg-[#7c3aed] p-1.5 rounded-full border-2 border-white">
                <svg
                  className="w-2.5 h-2.5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zM12 11a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col pt-1">
              <p className="text-[17px] font-bold text-gray-800 leading-tight">
                {name || "Marry Doe"}
              </p>
              <p className="text-[14px] font-medium text-gray-500">
                {email || "Marry@Gmail.Com"}
              </p>
            </div>
          </div>

          <p className="text-[15px] text-gray-700 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>

        <div className="flex-grow border-t border-dashed border-gray-300 min-h-[300px]"></div>

        <div className="h-16 border-t border-dashed border-gray-300 bg-[#f8f9fb]"></div>
      </div>
    </div>
  );
}
