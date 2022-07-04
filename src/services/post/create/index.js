import axios from "services/axios";

export const createPost = async ({ post, userId }) => {
  const { data, status } = await axios.post(`/post/create/${userId}`, post);
  return {
    data,
    status,
  };
};
