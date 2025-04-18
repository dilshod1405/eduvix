import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { auth, handlers: { GET, POST }, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.id_token) {
        token.idToken = account.id_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.idToken) {
        session.idToken = token.idToken;
      }
      return session;
    }
  },
  secret: process.env.AUTH_SECRET,
});
