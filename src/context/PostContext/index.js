import { userIdState } from "atoms/userAtoms";
import { createContext, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import {
  ilikeThatPost,
  giveDislikePost,
  giveLikePost,
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
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = async () => {
    if (isLiked) {
      const res = await giveDislikePost({ userId, postId });
      if (res.status === 200) {
        setLikes(res.data.likes - 1);
        setIsLiked(res.data.isLiked);
      }
    }

    const res = await giveLikePost({ userId, postId });
    if (res.status === 200) {
      setLikes(res.data.likes + 1);
      setIsLiked(res.data.isLiked);
    }
  };

  useEffect(() => {
    const iLike = async () => {
      const res = await ilikeThatPost({ userId, postId });
      setLikes(res.data.likes);
      setIsLiked(res.data.isLiked);
      setLoading(true);
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
        loading,
        handleLike,
        postId,
        isLiked,
        isComment,
        comments,
      }}>
      {children}
    </PostContext.Provider>
  );
};
