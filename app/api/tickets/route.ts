import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, priority } = body;

    const dummyUserId = "00000000-0000-0000-0000-000000000000";

    const { data, error } = await supabase
      .from("tickets")
      .insert([
        {
          title,
          description,
          priority,
          user_id: dummyUserId,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase Error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
