import { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
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
    if (
      formData.name &&
      formData.email &&
      formData.contact &&
      formData.message
    ) {
      alert("Thank you for your response, we will reach you soon!");
      setFormData({ name: "", email: "", contact: "", message: "" });
    } else {
      alert("Please fill all fields correctly!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-8 md:p-16">
      <form
        onSubmit={submit}
        className="w-full max-w-lg font-bold border-4 border-blue-950 rounded-3xl p-6 sm:p-8 md:p-12 bg-white shadow-lg"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-950 mb-8 text-center">
          Contact Us
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
            placeholder="Enter your Full Name"
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

        {/* Contact Field */}
        <div className="mb-6">
          <label className="block text-sm sm:text-lg md:text-xl text-blue-950 mb-2">
            Contact:
          </label>
          <input
            type="number"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your Phone Number"
            className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-blue-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label className="block text-sm sm:text-lg md:text-xl text-blue-950 mb-2">
            Message:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="4"
            className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-blue-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          className="w-full bg-green-200 text-blue-950 font-bold border-4 border-blue-950 cursor-pointer rounded-3xl py-2 sm:py-3 text-sm sm:text-lg hover:bg-green-300 transition duration-200"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
