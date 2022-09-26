import NextAuth from 'next-auth'
import CredentialProvider from "next-auth/providers/credentials";
import connectMongo from '../../../utils/connect';
import User from '../../../models/user';

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "johndoe@test.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // database look up
        await connectMongo();

        let userData = await User.findOne({email:credentials.email,password:credentials.password})
        
        if(!userData) return null;

        // login failed
        return userData;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      // first time jwt callback is run, user object is available
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }

      return session;
    },
  },
  secret: "test",
  jwt: {
    secret: "test",
    encryption: true,
  },
});