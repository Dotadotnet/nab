import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account?.provider === "google" && account?.id_token) {
        let response;

        try {
          response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/user/sign-up-google`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ idToken: account.id_token }),
              cache: "no-store"
            }
          );
        } catch (error) {
          console.error("Cannot reach backend Google login endpoint", {
            baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
            error
          });
          throw new Error("Cannot reach backend Google login endpoint");
        }

        const text = await response.text();
        let data = {};

        try {
          data = text ? JSON.parse(text) : {};
        } catch (error) {
          data = { description: text || "Invalid backend response" };
        }

        if (!response.ok || !data?.accessToken) {
          console.error("Google backend login failed", {
            status: response.status,
            data
          });
          throw new Error(data?.description || "Google backend login failed");
        }

        token.accessToken = data.accessToken;
        token.backendUser = data.user;
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.backendUser = token.backendUser;

      return session;
    }
  },
  pages: {
    signIn: "/fa/auth/signup",
    error: "/fa/auth/signup"
  },
  debug: process.env.NODE_ENV === "development"
};
