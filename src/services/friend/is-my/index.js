import axios from "services/axios";

export const getIsMyF = async ({ userId, userIdToCompare }) => {
  const { data, status } = await axios.get(
    `friend/is-my/${userId}/${userIdToCompare}`
  );

  return {
    data,
    status,
  };
};
