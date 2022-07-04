import { userIdState } from "atoms/user";
import { createContext, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { giveDislikePost } from "services/post/like/give-dislike";
import { giveLikePost } from "services/post/like/give-like";
import { iLikeThatPost } from "services/post/like/i-like-that";

export const PostContext = createContext();

export const PostProvider = ({ postId, children }) => {
  const userId = useRecoilValue(userIdState);
  const [likes, setLikes] = useState(0);
  const [LikeThat, setLikeThat] = useState(false);
  const [loadingLikes, setLoadingLikes] = useState(true);

  useEffect(() => {
    const iLike = async () => {
      const res = await iLikeThatPost({ userId: userId, postId: postId });
      if (res.status === 200) {
        setLikes(res.data.likes);
        setLikeThat(res.data.like);
        setLoadingLikes(false);
      }
    };
    iLike();
  }, []);

  const handleLike = async () => {
    if (!LikeThat) {
      const res = await giveLikePost({ userId: userId, postId: postId });
      if (res.status === 200) {
        setLikes(res.data.likes + 1);
        setLikeThat(res.data.like);
      }
    } else {
      const res = await giveDislikePost({ userId: userId, postId: postId });
      if (res.status === 200) {
        setLikes(res.data.likes - 1);
        setLikeThat(res.data.like);
      }
    }
  };

  return (
    <PostContext.Provider
      value={{
        likes,
        loadingLikes,
        LikeThat,
        handleLike,
      }}>
      {children}
    </PostContext.Provider>
  );
};
