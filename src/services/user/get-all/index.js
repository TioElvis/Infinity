import axios from "services/axios";

export const getAllUsers = async () => {
  const { data, status } = await axios.get(`/user/getAll`);
  return {
    data,
    status,
  };
};
