import { userIdState } from "atoms/userAtoms";
import Post from "components/Post";
import { PostProvider } from "context/PostContext";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { getNewPosts } from "services/post";

function HomePage() {
  const userId = useRecoilValue(userIdState);
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    const newPosts = async () => {
      const res = await getNewPosts({ userId: userId });
      if (res.status === 200) {
        setPosts(res.data);
        setLoadingPosts(false);
      }
    };
    newPosts();
  }, []);

  return (
    <div className="w-full grid grid-cols-3 lg:grid-cols-5">
      {loadingPosts ? (
        <div className="grid col-span-3"></div>
      ) : (
        <div className="grid col-span-3">
          {posts.length === 0 ? (
            <span className="m-auto mt-40">
              Create a post or add a friend to see posts here...{" "}
            </span>
          ) : (
            <div>
              {posts.map((post) => {
                return (
                  <PostProvider
                    image={post?.image?.url}
                    description={post?.description}
                    nickname={post?.userId?.nickname}
                    key={post?._id}
                    isComment={post?.isComment}
                    postId={post?._id}
                    avatar={post?.userId?.avatar?.url}
                    likes={post?.likes}
                    comments={post?.comments.length}>
                    <Post />
                  </PostProvider>
                );
              })}
            </div>
          )}
        </div>
      )}
      <div className="h-auto hidden sticky top-20 grid-cols-2 lg:block">
        hello
      </div>
    </div>
  );
}

export default HomePage;
