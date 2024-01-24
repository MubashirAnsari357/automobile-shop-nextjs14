import React from "react";

const ContactUsForm = () => {
  return (
    <form>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          className="w-full rounded border border-stroke px-[14px] py-3 text-base"
        />
      </div>
      <div className="mb-6">
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          className="w-full rounded border border-stroke px-[14px] py-3 text-base"
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Your Phone"
          name="phone"
          className="w-full rounded border border-stroke px-[14px] py-3 text-base"
        />
      </div>
      <div className="mb-6">
        <textarea
          rows="3"
          placeholder="Your Message"
          name="message"
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base"
          defaultValue=""
        />
      </div>
      <div>
        <button type="submit" className="primary-btn w-full">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
