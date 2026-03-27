import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      alert("Welcome for signing to our Platform!");
      setFormData({ name: "", email: "", password: "" });
      navigate("/home");
    } else {
      alert("Please fill the form correctly!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-2 sm:p-6 md:p-8">
      <form
        onSubmit={submit}
        className="w-full max-w-lg font-bold border-4 border-blue-950 rounded-3xl p-4 sm:p-6 md:p-8 bg-white shadow-lg"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-950 mb-8 text-center">
          Sign Up
        </h2>

        {/* Name Field */}
        <div className="mb-6">
          <label className="block text-sm sm:text-lg md:text-xl text-blue-950 mb-2">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-blue-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-sm sm:text-lg md:text-xl text-blue-950 mb-2">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-blue-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        {/* Password Field */}
        <div className="mb-8">
          <label className="block text-sm sm:text-lg md:text-xl text-blue-950 mb-2">
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your Password"
            className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-blue-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        {/* Submit Button */}
        <button
          className="w-full bg-green-200 text-blue-950 font-bold border-4 border-blue-950 cursor-pointer rounded-3xl py-2 sm:py-3 text-sm sm:text-lg hover:bg-green-300 transition duration-200"
          type="submit"
        >
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Page;
