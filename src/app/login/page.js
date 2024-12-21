"use client";

import Link from "next/link";
import "../globals.css";
import { useRef, useState } from "react";

export default function Home() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent the form from reloading the page

    // Get values from the refs
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    setError("");

    setIsSubmitting(true);

    // Prepare the data to be sent in the POST request
    const formData = {
      email,
      password,
    };

    try {
      // Make the POST request to the server
      const response = await fetch("http://localhost:3001/login", {
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
        alert("Login successful!");
        const res = await response.json();
        emailRef.current.value = "";
        passwordRef.current.value = "";
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }

    setIsSubmitting(false); // Reset the submitting state
  }

  return (
    <div className="container">
      <h2>Login to CRMS</h2>
      <form id="loginForm" onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}{" "}
        <input
          type="email"
          ref={emailRef}
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Enter your password"
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging In..." : "Login"}
        </button>
      </form>

      <div className="links">
        <Link
          key={"Register"}
          href={"/register"}
          className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        >
          <p className="hidden md:block">{"Register"}</p>
        </Link>
      </div>
    </div>
  );
}
