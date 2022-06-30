import { userIdState } from "atoms/userAtoms";
import { createContext, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import {
  giveDislikePost,
  giveLikePost,
  iLikeThatPost,
} from "services/post/index";

export const PostContext = createContext();

export const PostProvider = ({
  children,
  postId,
  image,
  description,
  nickname,
  isComment,
  avatar,
  comments,
}) => {
  const userId = useRecoilValue(userIdState);
  const [likes, setLikes] = useState(0);
  const [Ilike, setILike] = useState(false);
  const [loadingLikes, setLoadingLikes] = useState(true);

  const handleLike = async () => {
    if (!Ilike) {
      const res = await giveLikePost({ userId, postId });
      if (res.status === 200) {
        setLikes(res.data.likes + 1);
        setILike(res.data.isLiked);
      }
    } else {
      const res = await giveDislikePost({ userId, postId });
      if (res.status === 200) {
        setLikes(res.data.likes - 1);
        setILike(res.data.isLiked);
      }
    }
  };

  useEffect(() => {
    const iLike = async () => {
      const res = await iLikeThatPost({ userId, postId });
      if (res.status === 200) {
        setLikes(res.data.likes);
        setILike(res.data.isLiked);
        setLoadingLikes(false);
      }
    };
    iLike();
  }, [postId, userId]);

  return (
    <PostContext.Provider
      value={{
        likes,
        image,
        description,
        avatar,
        nickname,
        loadingLikes,
        handleLike,
        postId,
        Ilike,
        isComment,
        comments,
      }}>
      {children}
    </PostContext.Provider>
  );
};
