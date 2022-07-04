import axios from "services/axios";

export const giveLikePost = async ({ userId, postId }) => {
  const { data, status } = await axios.patch(
    `/like-post/give/${userId}/${postId}`
  );
  return {
    data,
    status,
  };
};
