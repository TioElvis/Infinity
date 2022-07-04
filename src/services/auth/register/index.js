import axios from "services/axios";

export const register = async ({ name, nickname, email, password }) => {
  const { data, status } = await axios.post("/auth/register", {
    name,
    nickname,
    email,
    password,
  });
  return {
    data,
    status,
  };
};
