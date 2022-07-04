import axios from "services/axios";

export const getIHaveFR = async ({ userId, userIdToCompare }) => {
  const { data, status } = await axios.get(
    `friend-request/i-have/${userId}/${userIdToCompare}`
  );

  return {
    data,
    status,
  };
};
