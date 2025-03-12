import { auth } from "@/lib/auth";
import { URLS } from "@/lib/urls";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect(URLS.dashboard);
  }

  return (
    <>
      <main>
        {/* Landing Page components go here */}
        Landing Page
      </main>
    </>
  );
}
