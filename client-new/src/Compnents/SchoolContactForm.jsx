import React, { useState } from "react";
import { toast } from "react-toastify";

const SchoolContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    designation: "",
    city: "",
    schoolName: "",
    preferredDate: "",
    preferredTime: "",
    requirements: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4600/school/add-school-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);
        setFormData({
          name: "",
          email: "",
          contactNumber: "",
          designation: "",
          city: "",
          schoolName: "",
          preferredDate: "",
          preferredTime: "",
          requirements: "",
        });
      } else {
        toast.error("Please try again later.");
      }
    } catch (error) {
      toast.error("Submission failed. Please try again.");
    }
  };

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-16" id="school-contact-form">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-900 leading-tight">
          Looking to Collaborate or Enroll Students?
        </h2>
        <p className="text-lg md:text-xl mt-2 text-gray-600">
          Reach out to us by filling the form below
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
        <img
          src="/images/school-img-1.webp"
          alt="Contact illustration"
          className="w-full max-w-md lg:max-w-xl object-cover rounded-xl shadow-md"
          loading="lazy"
        />

        <form
          onSubmit={handleSubmit}
          className="w-full bg-[#27548A] text-white rounded-2xl p-6 sm:p-10 shadow-xl backdrop-blur-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Name", name: "name", placeholder: "Jane Doe" },
              { label: "Email", name: "email", type: "email", placeholder: "jane@example.com" },
              { label: "Phone Number", name: "contactNumber", type: "tel", placeholder: "+91 1234567890" },
              { label: "Designation", name: "designation", placeholder: "Principal / Teacher" },
              { label: "City", name: "city", placeholder: "Delhi" },
              { label: "School Name", name: "schoolName", placeholder: "ABC International School" },
            ].map(({ label, name, type = "text", placeholder }) => (
              <div key={name}>
                <label className="block font-medium mb-2">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  required
                  className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white focus:ring-2 focus:ring-pink-300 focus:outline-none"
                />
              </div>
            ))}

            <div>
              <label className="block font-medium mb-2">Preferred Date</label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/20 text-white focus:ring-2 focus:ring-pink-300 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Preferred Time</label>
              <input
                type="time"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/20 text-white focus:ring-2 focus:ring-pink-300 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block font-medium mb-2">Your Requirements</label>
            <textarea
              name="requirements"
              rows={4}
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Tell us more about your needs..."
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white focus:ring-2 focus:ring-pink-300 focus:outline-none"
            ></textarea>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="px-10 py-3 bg-pink-500 hover:bg-pink-600 rounded-full font-semibold text-white shadow-lg transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SchoolContactForm;
