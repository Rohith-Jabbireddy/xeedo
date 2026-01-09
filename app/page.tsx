import { redirect } from "next/navigation";

// Root (/) now permanently redirects users to /home
// Move any old landing content into app/home/page.tsx (created) and implement design there.
export default function RootRedirect() {
  redirect("/home");
}
