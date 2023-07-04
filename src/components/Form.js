import "./FormStyles.css";

import React, { useState, useCallback } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Form = () => {
  // Create state variable for the response
  const [response, setResponse] = useState("");

  // Initialize the useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Create a function to handle the form submission
  const onSubmit = useCallback(
    async (data) => {
      // Call your backend route with axios
      try {
        const result = await axios.post("/api/send-email", data);
        // Set the response state with the result
        setResponse(result.data.message);
      } catch (err) {
        // Set the response state with the error message
        setResponse(err.response.data.message);
      }
    },
    [setResponse]
  );

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Your Name</label>
        <input
          type="text"
          {...register("name", { required: true })}
          error={errors.name ? true : false}
        ></input>
        <label>Email</label>
        <input
          type="email"
          {...register("email", { required: true })}
          error={errors.email ? true : false}
        ></input>
        <label>Subject</label>
        <input
          type="text"
          {...register("subject", { required: true })}
          error={errors.subject ? true : false}
        ></input>
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          {...register("message", { required: true })}
          error={errors.message ? true : false}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      {/* Display the response if any */}
      {response && <p>{response}</p>}
    </div>
  );
};

export default Form;