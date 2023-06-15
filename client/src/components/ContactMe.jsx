import "../styles/ContactMe.css";
import React, { useState } from "react";
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
      const response = await axios.post("http://localhost/api/contact", {
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
    <div class="form-container" id="ContactMe">
      <ToastContainer />
      <div class="form-container">
        <form class="ContactMe-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Contact me</legend>
            <div class="ContactMe-input">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="your name"
                required
              />
            </div>
            <div class="ContactMe-input">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="your email"
                required
              />
            </div>
            <label class="ContactMe-textarea-label" htmlFor="message">Reason for contact:</label>
            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Your message here..."
              required
            ></textarea>
            <button class="ContactMe-button" type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
