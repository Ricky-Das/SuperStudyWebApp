import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-transparent px-4 py-2 flex justify-between items-center shadow-md">
      <div className="font-serif flex text-3xl text-secondary-accent-color">
        <h1>SuperStudy</h1>
      </div>
      <div className="space-x-4">
        <Link
          href="/homework-solutions"
          className="text-gray-500 hover:text-gray-700 transition duration-300"
        >
          Homework Solutions
        </Link>
        <Link
          href="/study-tools"
          className="text-gray-500 hover:text-gray-700 transition duration-300"
        >
          Study Tools
        </Link>
        <Link
          href="/premium"
          className="text-gray-500 hover:text-gray-700 transition duration-300"
        >
          Premium
        </Link>
        <Link
          href="/sign-up"
          className="bg-main-accent-color text-white px-3 py-2 rounded-md transition duration-300 hover:bg-opacity-90"
        >
          Sign Up
        </Link>
        <Link
          href="/log-in"
          className="text-gray-500 hover:text-gray-700 transition duration-300"
        >
          Log In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
