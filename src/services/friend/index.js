import axios from "services/axios";

export const isMyFriend = async ({ userId, userIdCompare }) => {
  const { data, status } = await axios.get(
    `friend/isMyFriend/${userId}/${userIdCompare}`
  );

  return {
    data,
    status,
  };
};
