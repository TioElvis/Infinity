import axios from "./axios";

export const getPostsRamdom = async () => {
  return await axios.get("/posts");
};
