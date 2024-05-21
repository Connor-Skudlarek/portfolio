import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/contact", {
        name,
        email,
        message,
      });
      if (response.data.success) {
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Successfully submitted!", { autoClose: 3000 });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      // className="from-themeColor2 to-themeColor1 bg-gradient-from-t bg-gradient-to-b from-70% via-transparent"
      className="bg-gradient-to-tl from-[#ff8c002d] from-[1%] via-sky-300 via-90% to-[#0000ff2d] to-100%"
      id="ContactMe"
    >
      <ToastContainer />
      <div className="m-auto max-w-[100%]">
        <form
          className="flex w-[70%] flex-col items-center px-[15%] py-[5%] font-[1.5rem]"
          onSubmit={handleSubmit}
        >
          <fieldset className="items-left m-[15px] flex w-auto flex-col">
            <legend>Contact me</legend>
            <div className="m-[10px] flex flex-col items-center gap-[10px] md:flex-row">
              <label htmlFor="name" className="w-[60px] text-left">
                Name:
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="your name"
                required
                className="w-[100%] max-w-[250px]"
              />
            </div>
            <div className="m-[10px] flex flex-col items-center gap-[10px] md:flex-row">
              <label htmlFor="email" className="w-[60px] text-left">
                Email:
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="your email"
                className="w-[100%] max-w-[250px]"
                required
              />
            </div>
            <label className="m-[10px] block w-[200px]" htmlFor="message">
              Reason for contact:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Your message here..."
              className="m-[10px] mt-0 h-[200px] w-[300px] resize-none overflow-y-auto"
              required
            ></textarea>
            <button
              className="m-[10px] w-[100px] rounded-[5px] bg-[#ff8c00dd] p-[10px] text-2xl text-[#0000ff] shadow-md hover:bg-[#fff] hover:text-stone-800"
              type="submit"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
