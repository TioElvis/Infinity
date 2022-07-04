import axios from "services/axios";

export const giveDislikePost = async ({ userId, postId }) => {
  const { data, status } = await axios.patch(
    `/like-post/remove/${userId}/${postId}`
  );
  return {
    data,
    status,
  };
};
