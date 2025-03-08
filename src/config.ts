import dotenv from "dotenv";
dotenv.config();
export const config = {
  untappd: {
    clientId: process.env.UNTAPPED_API_CLIENT_ID,
    clientSecret: process.env.UNTAPPED_API_CLIENT_SECRET,
  },
};
