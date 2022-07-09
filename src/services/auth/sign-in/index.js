import axios from "services/axios";

export const signInService = async (payload) => {
  const { status, data } = await axios.post("auth/sign-in", payload);
  return {
    status,
    data,
  };
};
