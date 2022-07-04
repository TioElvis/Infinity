import axios from "services/axios";

export const getNewPostsFromMeAndFriends = async ({ userId }) => {
  const { data, status } = await axios.get(`/post/getNew/${userId}`);

  return {
    data,
    status,
  };
};
