import { Plus } from "lucide-react";

function Navbar() {
  return (
    <header className="bg-white p-4 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">ShareARide</div>
        <ul className="flex space-x-4 items-center">
          <li>
            <a href="#" className="text-gray-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600">
              How it Works
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600">
              Contact
            </a>
          </li>
          <li>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Sign Up
            </button>
          </li>
          <li>
            <button className="bg-green-500 text-white px-4 py-2 rounded flex gap-1">
              <Plus className="h-6 w-6" />
              Add a Trip
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
