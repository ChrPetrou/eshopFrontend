import axios from "axios";

const userAPIAxios = axios.create({
  baseURL: process.env.MONGO_URL,
});

export const UserApiAgent = {
  login: async (email: string, password: string) => {
    return userAPIAxios
      .post("/users/login", {
        email,
        password,
      })
      .then((res) => res.data);
  },
};
