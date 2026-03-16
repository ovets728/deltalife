"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

interface LoginResult {
  success: boolean;
  error?: string;
}

export async function login(formData: FormData): Promise<LoginResult> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || !email.trim()) return { success: false, error: "Email is required." };
  if (typeof password !== "string" || !password.trim()) return { success: false, error: "Password is required." };

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });

  if (error) return { success: false, error: "Invalid email or password." };

  redirect("/agent-portal");
}

export async function logout(): Promise<void> {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
