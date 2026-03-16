"use server";

import { createClient } from "@/utils/supabase/server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ActionResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(data: ContactFormData): Promise<ActionResult> {
  const { name, email, message } = data;

  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return { success: false, error: "Invalid input." };
  }
  if (!name.trim() || !email.trim() || !message.trim()) {
    return { success: false, error: "All fields are required." };
  }
  if (name.length > 200) return { success: false, error: "Name must be under 200 characters." };
  if (email.length > 254) return { success: false, error: "Email must be under 254 characters." };
  if (message.length > 5000) return { success: false, error: "Message must be under 5000 characters." };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return { success: false, error: "Please provide a valid email address." };

  const supabase = await createClient();
  const { error } = await supabase.from("contact_inquiries").insert({
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  });

  if (error) {
    console.error("Contact form submission error:", error.message);
    return { success: false, error: "Something went wrong. Please try again later." };
  }

  return { success: true };
}

export async function getDistrictOffices() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("district_offices")
    .select("*")
    .order("city", { ascending: true });

  if (error) {
    console.error("Failed to fetch district offices:", error.message);
    return { data: null, error: "Unable to load office locations." };
  }

  return { data };
}
