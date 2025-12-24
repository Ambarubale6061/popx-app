import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!existingUser) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: existingUser.name,
        email: existingUser.email,
      })
    );

    navigate("/profile");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f3f4f6] font-sans overflow-hidden">
      <div className="w-[375px] h-[90vh] max-h-[667px] bg-[#f7f8f9] border border-gray-200 shadow-sm flex flex-col p-5 relative overflow-hidden">
        <div className="pt-10 pb-2">
          <h1 className="text-[28px] font-bold text-[#1d2129] leading-tight mb-2">
            Signin to your <br /> PopX account
          </h1>
          <p className="text-[17px] text-[#828282] leading-snug">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-6 flex flex-col flex-grow">
          <div className="space-y-6">
            <div className="relative mt-2">
              <label className="absolute -top-2.5 left-3 bg-[#f7f8f9] px-1 text-[13px] font-medium text-[#6c25ff] z-10">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm bg-transparent outline-none focus:border-[#6c25ff]"
                required
              />
            </div>

            <div className="relative mt-2">
              <label className="absolute -top-2.5 left-3 bg-[#f7f8f9] px-1 text-[13px] font-medium text-[#6c25ff] z-10">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm bg-transparent outline-none focus:border-[#6c25ff]"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full py-3.5 bg-[#cbcbcb] text-white font-bold rounded-md text-[16px]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
