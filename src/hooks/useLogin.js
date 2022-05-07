import axios from "./axios";

const login = async ({ email, password }) => {
  const { data } = await axios.post("/login", { email, password });
  return data;
};

export default login;
