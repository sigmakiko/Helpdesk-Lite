"use server";

import { createClient } from "../../utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function updateTicketStatus(
  ticketId: string,
  currentStatus: string,
) {
  const supabase = await createClient();

  // اعكس الحالة الحالية (لو open تبقى closed، والعكس)
  const newStatus = currentStatus === "closed" ? "open" : "closed";

  const { data, error } = await supabase
    .from("tickets")
    .update({ status: newStatus })
    .eq("id", ticketId)
    .select();

  if (error) {
    console.error("Supabase Update Error:", error.message);
    return;
  }

  console.log("Updated successfully:", data);
  revalidatePath("/dashboard");
}
