import axios from "axios";
import { getCookie } from "cookies-next";

const token_id = getCookie("token");

const userAPIAxios = axios.create({
  baseURL: process.env.MONGO_URL,
  headers: {
    Authorization: `Bearer ${token_id}`,
  },
});

export const ActionsApiAgent = {
  getUser: async () => {
    return await userAPIAxios.post("/users/get-user").then((res) => res.data);
  },
  twoFa: async (code: string, token: string) => {
    return userAPIAxios
      .post("/users/2fa", { code: code, token: token })
      .then((res) => res.data);
  },
};
