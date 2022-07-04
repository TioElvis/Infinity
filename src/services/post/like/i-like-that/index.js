import axios from "services/axios";

export const iLikeThatPost = async ({ userId, postId }) => {
  const { data, status } = await axios.get(
    `/like-post/i-that/${userId}/${postId}`
  );

  return {
    data,
    status,
  };
};
