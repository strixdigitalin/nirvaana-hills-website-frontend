import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const AutoModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // 30 seconds ke baad modal open hoga
    const timer = setTimeout(() => {
      setOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const [IsLoading, setIsLoading] = useState(false);
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Number, setNumber] = useState('');
  const [Message, setMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Name) return toast.error('Name is required')
    if (!Email) return toast.error('Email is required')
    if (!Number) return toast.error('Mobile Number is required')
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(Number)) {
      toast.error("Enter a valid 10-digit mobile number");
      return false;
    }

    setIsLoading(true);

    try {
      const params = new URLSearchParams({
        UID: "fourqt",
        PWD: "wn9mxO76f34=",
        Channel: "MS",
        Src: "Website",
        ISD: "91",
        Mob: Number,
        Email: Email,
        name: Name,
        City: "",
        Location: "",
        Project: "",
        Remark: Message,
        url: window.location.href,
        UniqueId: "0",
      });

      const res = await fetch(
        `https://seadrealty08.4qterp.com/WebCreate.aspx?${params.toString()}`
      );

      const data = await res.json();

      if (data?.Status) {
        if (data?.Duplicate) {
          toast.error(`Lead already exists!`);
        } else {
          toast.success(`Lead created successfully!`);
        }
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
      } else {
        toast.error(data?.Message || "Failed to submit form");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };


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
                value={Name}
                onChange={(e) => { setName(e.target.value) }}
              />
              <input
                type="number"
                placeholder="Your Mobile No."
                className=""
                value={Number}
                onChange={(e) => { setNumber(e.target.value) }}
              />
              <input
                type="email"
                placeholder="Your Email"
                className=""
                value={Email}
                onChange={(e) => { setEmail(e.target.value) }}
              />
              <textarea
                placeholder="Message"
                className=""
                value={Message}
                onChange={(e) => { setMessage(e.target.value) }}
              />
              {/* <button
                type="submit"
                className=""
              >
                Submit
              </button> */}
              <button
                onClick={handleSubmit}
                disabled={IsLoading}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded"
              >
                {IsLoading ? (
                  <>
                    <span className="loader"></span>
                    Wait
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoModal;
