import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h2>Login to CRMS</h2>
      <form id="loginForm" action="#">
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
        />
        <input
          type="text"
          id="phone"
          placeholder="Enter your phone number"
          required
        />
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
        />
        <button type="submit">Login</button>
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
