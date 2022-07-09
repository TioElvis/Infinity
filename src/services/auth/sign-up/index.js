import axios from "services/axios";

export const signUpService = async (payload) => {
  const { status, data } = await axios.post("auth/sign-up", payload);
  return {
    status,
    data,
  };
};
