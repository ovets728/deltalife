import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function AgentPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const role = user.app_metadata?.role;
  if (role !== "admin" && role !== "agent") redirect("/");

  return <>{children}</>;
}
