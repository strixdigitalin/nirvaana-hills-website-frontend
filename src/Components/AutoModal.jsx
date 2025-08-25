import React, { useState, useEffect } from "react";

const AutoModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // 30 seconds ke baad modal open hoga
    const timer = setTimeout(() => {
      setOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setOpen(false)}
            >
              ✖
            </button>

            <h2 className="text-xl font-semibold mb-4 text-center">Get in Touch</h2>
            <form className="flex flex-col gap-3 auto-modal">
              <input
                type="text"
                placeholder="Your Name"
                className=""
              />
              <input
                type="number"
                placeholder="Your Mobile No."
                className=""
              />
              <input
                type="email"
                placeholder="Your Email"
                className=""
              />
              <textarea
                placeholder="Message"
                className=""
              />
              <button
                type="submit"
                className=""
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoModal;
