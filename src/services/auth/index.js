import axios from "services/axios";

export const login = async ({ email, password }) => {
  const { data, status } = await axios.post("/auth/login", { email, password });
  return {
    data,
    status,
  };
};

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
