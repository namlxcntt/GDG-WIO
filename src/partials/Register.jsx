import React, { useState } from "react";
import CtaButton from "../components/CtaButton";

const Register = () => {
  const [form, setForm] = useState({});
  const [dobPlaceholderDisp, setDobPlaceholderDisp] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setForm((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted!');
  };
  return (
    <section
      id="register"
      className="w-11/12 my-20 mx-auto relative grid lg:w-4/5 bg-register-img p-16 rounded-register bg-center bg-cover bg-no-repeat text-center items-center"
    >
      <div className="w-4/5 absolute left-1/10 top-m-10 bg-register px-8 py-5 rounded-full text-black font-bold text-2xl border-2 border-solid border-black">
        Ready to Join the Google IO Extended Hanoi 2023!
      </div>
      <p className="text-white text-base mb-10 mt-5">
        Fill out this form to get the free ticket from GDG Hanoi.
      </p>
      <form className="grid place-items-center gap-8" onSubmit={handleSubmit}>
        <div className="w-5/8 flex justify-items-center relative">
          <input
            className="w-full rounded-full mx-auto pl-6"
            type="text"
            name="fullName"
            value={form.fullName}
            required
            onChange={handleInputChange}
          />
          <div
            className={`${
              form.fullName ? "hidden" : "block"
            } absolute text-slate-400 top-2.5 left-6 pointer-events-none`}
          >
            Nguyen Van A <span className="text-red-800 font-bold">*</span>
          </div>
        </div>

        <div className="w-5/8 flex justify-items-center relative">
          <input
            className="w-full rounded-full mx-auto pl-6"
            type="text"
            name="email"
            value={form.email}
            required
            onChange={handleInputChange}
          />
          <div
            className={`${
              form.email ? "hidden" : "block"
            } absolute text-slate-400 top-2.5 left-6 pointer-events-none`}
          >
            Example@gmail.com <span className="text-red-800 font-bold">*</span>
          </div>
        </div>

        <div className="w-5/8 flex justify-items-center relative">
          <input
            className="w-full rounded-full mx-auto pl-6"
            type="text"
            name="number"
            value={form.number}
            required
            onChange={handleInputChange}
          />
          <div
            className={`${
              form.number ? "hidden" : "block"
            } absolute text-slate-400 top-2.5 left-6 pointer-events-none`}
          >
            0xx xxx xxx <span className="text-red-800 font-bold">*</span>
          </div>
        </div>

        <div className="w-5/8 flex justify-items-center relative">
          <input
            className="w-full rounded-full mx-auto pl-6"
            type="text"
            name="age"
            value={form.age}
            required
            onChange={handleInputChange}
            onFocus={(e) => {
              e.target.type = "date";
              setDobPlaceholderDisp(false);
            }}
            onBlur={(e) => {
              e.target.type = "text";
              setDobPlaceholderDisp(true);
            }}
          />
          <div
            className={`${
              dobPlaceholderDisp ? "block" : "hidden"
            } absolute text-slate-400 top-2.5 left-6 pointer-events-none`}
          >
            Date of birth <span className="text-red-800 font-bold">*</span>
          </div>
        </div>

        <div className="w-5/8 flex justify-items-center relative">
          <input
            className="w-1/2 rounded-full mr-5 pl-6"
            type="text"
            name="company"
            value={form.company}
            required
            onChange={handleInputChange}
          />
          <div
            className={`${
              form.company ? "hidden" : "block"
            } absolute text-slate-400 top-2.5 left-6 pointer-events-none`}
          >
            Company <span className="text-red-800 font-bold">*</span>
          </div>
          <input
            className="w-1/2 rounded-full  pl-6"
            type="text"
            name="jobTitle"
            value={form.jobTitle}
            required
            onChange={handleInputChange}
          />
          <div
            className={`${
              form.jobTitle ? "hidden" : "block"
            } absolute text-slate-400 top-2.5 left-form pointer-events-none`}
          >
            Job Title
          </div>
        </div>

        <div className="w-5/8 flex justify-items-center relative">
          <input
            className="w-1/2 rounded-full mr-5 pl-6"
            type="text"
            name="experience"
            value={form.experience}
            required
            onChange={handleInputChange}
          />
          <div
            className={`${
              form.experience ? "hidden" : "block"
            } absolute text-slate-400 top-2.5 left-6 pointer-events-none`}
          >
            Year of Experience <span className="text-red-800 font-bold">*</span>
          </div>
          <input
            className="w-1/2 rounded-full  pl-6"
            type="text"
            name="location"
            value={form.location}
            onChange={handleInputChange}
          />
          <div
            className={`${
              form.location ? "hidden" : "block"
            } absolute text-slate-400 top-2.5 left-form pointer-events-none`}
          >
            Place of Residence
          </div>
        </div>

        <div className="w-5/8 flex justify-items-center relative">
          <textarea
            className="w-1/2 rounded-full mr-5 pl-6"
            name="findUs"
            rows={2}
            value={form.findUs}
            onChange={handleInputChange}
          />
          <div
            className={`${
              form.findUs ? "hidden" : "block"
            } absolute text-slate-400 top-2.5 left-6 pointer-events-none`}
          >
            How did you learn about the event?
          </div>
          <textarea
            className="w-1/2 rounded-full  pl-6"
            name="questionForUs"
            value={form.questionForUs}
            rows={2}
            onChange={handleInputChange}
          />
          <div
            className={`${
              form.questionForUs ? "hidden" : "block"
            } absolute text-slate-400 top-2.5 left-form pointer-events-none`}
          >
            Do you have any questions for us?
          </div>
        </div>

        <div className="w-auto flex justify-items-center text-white items-center">
          <input type="checkbox" name="term" />
          <label className="ml-2" htmlFor="accept">
            I accept the
            <a data-bs-toggle="modal" data-bs-target="#policyPopup">
              Privacy Policy Google I/O Extended Hanoi 2023
            </a>
          </label>
        </div>
        <button
          className="bg-cta px-8 py-5 rounded-full  text-black font-bold text-2xl"
          type="submit"
        >
          Submit Form
        </button>
      </form>
    </section>
  );
};

export default Register;
