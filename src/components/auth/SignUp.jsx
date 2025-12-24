import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [isAgency, setIsAgency] = useState("yes");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
  });

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = users.some((u) => u.email === form.email);
    if (alreadyExists) {
      alert("User already exists");
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem(
      "user",
      JSON.stringify({ name: form.name, email: form.email })
    );

    navigate("/profile");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f3f4f6] font-sans overflow-hidden">
      <div className="w-[375px] h-[90vh] max-h-[667px] bg-[#f7f8f9] border border-gray-200 shadow-sm flex flex-col p-5 relative overflow-hidden">
        <div className="pt-10 pb-8 relative">
          <h1 className="text-[26px] font-bold text-[#1d2129] leading-tight">
            Create your <br /> PopX account
          </h1>
          <div className="absolute top-10 left-[150px] w-7 h-7 bg-[#fbbd08] rounded-full flex items-center justify-center text-white text-xs font-bold">
            1
          </div>
        </div>

        <form onSubmit={handleSignup} className="flex flex-col flex-grow">
          <div className="space-y-5.5">
            {[
              { label: "Full Name*", key: "name" },
              { label: "Phone number*", key: "phone" },
              { label: "Email address*", key: "email" },
              { label: "Password*", key: "password" },
              { label: "Company name", key: "company" },
            ].map((item, idx) => (
              <div key={idx} className="relative mt-2">
                <label className="absolute -top-2.5 left-3 bg-[#f7f8f9] px-1 text-[13px] font-medium text-[#6c25ff] z-10">
                  {item.label}
                </label>
                <input
                  type="text"
                  placeholder="Marry Doe"
                  value={form[item.key]}
                  onChange={(e) =>
                    setForm({ ...form, [item.key]: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm bg-transparent outline-none focus:border-[#6c25ff]"
                  required={item.key !== "company"}
                />
              </div>
            ))}

            <div className="pt-2">
              <p className="text-[15px] font-medium text-gray-800 mb-3">
                Are you an Agency?*
              </p>
              <div className="flex gap-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    checked={isAgency === "yes"}
                    onChange={() => setIsAgency("yes")}
                    className="accent-[#6c25ff] w-5 h-5"
                  />
                  <span className="ml-2 text-sm">Yes</span>
                </label>

                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    checked={isAgency === "no"}
                    onChange={() => setIsAgency("no")}
                    className="accent-[#6c25ff] w-5 h-5"
                  />
                  <span className="ml-2 text-sm">No</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex-grow"></div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#6c25ff] text-white font-semibold rounded-lg mb-2
             hover:bg-[#7a3eff] active:scale-[0.98]
             shadow-lg shadow-purple-500/30
             transition-all duration-200 ease-in-out"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
