import Link from "next/link";
export default function NavBar() {
  return (
    <header>
      <nav className="flex justify-between px-20 py-10 items-center bg-white">
        <h1 className="text-xl text-gray-800 font-bold">EventBookie</h1>
        <div className="flex items-center">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 pt-0.5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="ml-2 outline-none bg-transparent font-"
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
            />
          </div>
          <ul className="flex items-center space-x-6">
            <li className="font-semibold text-gray-700">
              <Link href="/" className="hover:text-red-400">
                Home
              </Link>
            </li>
            <li className="font-semibold text-gray-700">
              <Link href="/events" className="hover:text-red-400">
                Events
              </Link>
            </li>
            <li className="font-semibold text-gray-700">
              <Link href="/about" className="hover:text-red-400">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
