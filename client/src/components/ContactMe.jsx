import '../styles/ContactMe.css'
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      if (response.data.success){
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Successfully submitted!", { autoClose: 3000 })
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Contact me</legend>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder=" your name"
          />
          <label htmlFor="name">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder=" your email"
          />
          <label htmlFor="name">Reason for contact:</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Your Message here..."
          ></textarea>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default ContactMe;
