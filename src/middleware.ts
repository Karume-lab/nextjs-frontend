import { auth } from "@/lib/auth";
import { URLS } from "@/lib/urls";
import { NextResponse } from "next/server";

export default auth((req: any) => {
  if (!req.auth) {
    const signInUrl = new URL(URLS.signIn, req.nextUrl.origin);
    signInUrl.searchParams.set("nextUrl", req.nextUrl.pathname); 
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
