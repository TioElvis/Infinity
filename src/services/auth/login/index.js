import axios from "services/axios";

export const login = async ({ email, password }) => {
  const { data, status } = await axios.post("/auth/login", { email, password });
  return {
    data,
    status,
  };
};
