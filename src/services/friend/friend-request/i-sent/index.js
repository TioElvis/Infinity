import axios from "services/axios";

export const getISentFR = async ({ userId, userIdToCompare }) => {
  const { data, status } = await axios.get(
    `friend-request/i-sent/${userId}/${userIdToCompare}`
  );

  return {
    data,
    status,
  };
};
