import Link from "next/link";

export default function Register() {
  return (
    <div className="container">
      <h2>Register for CRMS</h2>
      <form id="registerForm" action="#">
        <input
          type="email"
          id="regEmail"
          placeholder="Enter your email"
          required
        />
        <input
          type="text"
          id="regPhone"
          placeholder="Enter your phone number"
          required
        />
        <input
          type="password"
          id="regPassword"
          placeholder="Enter your password"
          required
        />
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm your password"
          required
        />
        <button type="submit">Register</button>
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
