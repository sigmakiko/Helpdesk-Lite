import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-full max-w-md flex flex-col gap-5">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome to HelpDesk
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Please log in or create an account.
          </p>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none"
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none"
            id="password"
            name="password"
            type="password"
            required
            placeholder="••••••••"
          />
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <button
            formAction={login}
            className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Log In
          </button>
          <button
            formAction={signup}
            className="w-full bg-gray-50 text-gray-700 font-semibold py-2.5 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
