import Link from "next/link";
import { logout } from "../app/login/actions";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
      <div className="flex items-center space-x-6">
        <span className="font-bold text-lg text-gray-900">HelpDesk Lite</span>
        <div className="flex space-x-4">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Create Ticket
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Dashboard
          </Link>
        </div>
      </div>

      <div>
        <form action={logout}>
          <button
            type="submit"
            className="text-sm font-medium text-red-600 hover:text-red-800 bg-red-50 px-3 py-1.5 rounded-lg transition-colors"
          >
            Logout
          </button>
        </form>
      </div>
    </nav>
  );
}
