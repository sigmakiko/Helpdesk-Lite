import { createClient } from "../../utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const supabase = await createClient();

  // 1. التأكد من تسجيل الدخول
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login");
  }

  // 2. جلب التذاكر من قاعدة البيانات (الأحدث أولاً)
  const { data: tickets, error } = await supabase
    .from("tickets")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        Error loading tickets: {error.message}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Agent Dashboard</h1>
          <Link
            href="/"
            className="text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 px-4 py-2 rounded-lg"
          >
            + Create New Ticket
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500 uppercase tracking-wider">
                  <th className="p-4">Title</th>
                  <th className="p-4 hidden md:table-cell">Description</th>
                  <th className="p-4">Priority</th>
                  <th className="p-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {tickets?.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-gray-500">
                      No tickets found. You are all caught up!
                    </td>
                  </tr>
                ) : (
                  tickets?.map((ticket) => (
                    <tr
                      key={ticket.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-4 font-medium">{ticket.title}</td>
                      <td className="p-4 hidden md:table-cell text-gray-500 text-sm truncate max-w-xs">
                        {ticket.description}
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            ticket.priority === "high"
                              ? "bg-red-100 text-red-700"
                              : ticket.priority === "medium"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-green-100 text-green-700"
                          }`}
                        >
                          {ticket.priority}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-gray-500">
                        {new Date(ticket.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
