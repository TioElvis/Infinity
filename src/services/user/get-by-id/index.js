import axios from "services/axios";

export const getUserByIdService = async ({ userId }) => {
  const { data, status } = await axios.get(`/user/${userId}`);

  return {
    data,
    status,
  };
};
