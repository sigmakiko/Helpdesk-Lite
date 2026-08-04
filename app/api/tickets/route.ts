import { NextResponse } from "next/server";
import { createClient } from "../../../utils/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();

    // جلب بيانات المستخدم المسجل الدخول
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    // لو مفيش مستخدم، نرفض العملية
    if (authError || !user) {
      return NextResponse.json(
        { error: "Unauthorized. Please log in first." },
        { status: 401 },
      );
    }

    const body = await request.json();
    const { title, description, priority } = body;

    const { data, error } = await supabase
      .from("tickets")
      .insert([
        {
          title,
          description,
          priority,
          user_id: user.id, // استخدام المعرف الحقيقي للمستخدم
        },
      ])
      .select();

    if (error) {
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
