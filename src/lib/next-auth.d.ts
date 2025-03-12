import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phone?: string;
      accessToken: string;
      refreshToken: string;
    };
    accessToken: string;
    refreshToken: string;
  }

  interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    accessToken: string;
    refreshToken: string;
  }

  interface JWT {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    accessToken: string;
    refreshToken: string;
  }
}
