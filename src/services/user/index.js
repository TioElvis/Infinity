import axios from "services/axios";

export const getUserById = async ({ userId }) => {
  const { data, status } = await axios.get(`/user/${userId}`);
  return {
    data,
    status,
  };
};
