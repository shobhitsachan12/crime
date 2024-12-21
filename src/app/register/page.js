"use client"; // Mark this as a client-side component

import Link from "next/link";
import { useRef, useState } from "react"; // Import useRef for form references
import "../globals.css";

export default function Register() {
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent the form from reloading the page

    // Get values from the refs
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    // Basic validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(""); // Clear any existing error

    if (!email || !phone || !password || !confirmPassword) {
      setError("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);

    // Prepare the data to be sent in the POST request
    const formData = {
      email,
      phone,
      password,
    };

    try {
      // Make the POST request to the server
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if the response is successful (status 200-299)
      if (!response.ok) {
        const errorData = await response.json();
        setError(
          errorData.message || "Something went wrong. Please try again."
        );
      } else {
        // Handle success (e.g., show success message, redirect, etc.)
        alert("Registration successful!");
        // Optionally, reset form fields after success
        emailRef.current.value = "";
        phoneRef.current.value = "";
        passwordRef.current.value = "";
        confirmPasswordRef.current.value = "";
      }
    } catch (error) {
      // Handle any errors during the request
      setError("An error occurred. Please try again later.");
    }

    setIsSubmitting(false); // Reset the submitting state
  }

  return (
    <div className="container">
      <h2>Register for CRMS</h2>
      <form id="registerForm" onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}{" "}
        {/* Show error message if any */}
        <input
          type="email"
          ref={emailRef} // Use ref to access this input value
          placeholder="Enter your email"
          required
        />
        <input
          type="text"
          ref={phoneRef}
          placeholder="Enter your phone number"
          required
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Enter your password"
          required
        />
        <input
          type="password"
          ref={confirmPasswordRef}
          placeholder="Confirm your password"
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
      <div className="links">
        <Link
          key={"Login"}
          href={"/login"}
          className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        >
          <p className="hidden md:block">{"Login"}</p>
        </Link>
      </div>
    </div>
  );
}
