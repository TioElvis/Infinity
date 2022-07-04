import axios from "services/axios";

export const getPeopleGiveLike = async ({ postId }) => {
  const { data, status } = await axios.get(`like-post/get-people/${postId}`);

  return {
    data,
    status,
  };
};
