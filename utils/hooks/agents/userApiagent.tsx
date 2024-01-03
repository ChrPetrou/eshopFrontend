import axios from "axios";

const userAPIAxios = axios.create({
  baseURL: process.env.MONGO_URL,
});

export const UserApiAgent = {
  register: async (email: string, password: string, username: string) => {
    return await userAPIAxios
      .post("/users/register", {
        username,
        email,
        password,
      })
      .then((res) => res.data);
  },
  login: async (email: string, password: string) => {
    return userAPIAxios
      .post("/users/login", {
        email,
        password,
      })
      .then((res) => res.data);
  },
  twoFa: async (code: string, token: string) => {
    return userAPIAxios
      .post("/users/2fa", { code: code, token: token })
      .then((res) => res.data);
  },
};
