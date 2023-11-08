import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-transparent px-4 py-2 flex justify-between items-center shadow-md">
      <div className="text-3xl text-secondary-accent-color font-serif">
        <h1>SuperStudy</h1>
      </div>
      <div className="flex space-x-4">
        {/* Directly pass the class to Link component */}
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
        {/* For buttons or different styled links, you can still use <a> tags inside but without wrapping them */}
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
