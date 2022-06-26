import axios from "services/axios";

export const createPost = async ({ post, userId }) => {
  const { data, status } = await axios.post(`/post/create/${userId}`, post);
  return {
    data,
    status,
  };
};

export const getPostById = async ({ postId }) => {
  const { data, status } = await axios.get(`/post/${postId}`);
  return {
    data,
    status,
  };
};

export const giveLikePost = async ({ userId, postId }) => {
  const { data, status } = await axios.patch(
    `/post/giveLike/${userId}/${postId}`
  );
  return {
    data,
    status,
  };
};

export const giveDislikePost = async ({ userId, postId }) => {
  const { data, status } = await axios.patch(
    `/post/giveDislike/${userId}/${postId}`
  );
  return {
    data,
    status,
  };
};

export const iLikeThatPost = async ({ userId, postId }) => {
  const { data, status } = await axios.get(`/post/iLike/${userId}/${postId}`);

  return {
    data,
    status,
  };
};
