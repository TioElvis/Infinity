import { userIdState } from "atoms/user";
import PostComponent from "components/post-components";
import { PostProvider } from "context/post";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { getNewPostsFromMeAndFriends } from "services/post/get/new-posts-from-me-and-friends";

function HomePage() {
  const userId = useRecoilValue(userIdState);
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    const get = async () => {
      const res = await getNewPostsFromMeAndFriends({ userId: userId });
      if (res.status === 200) {
        setPosts(res.data);
        setLoadingPosts(false);
      }
    };
    get();
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
                  <PostProvider key={post?._id} postId={post?._id}>
                    <PostComponent
                      avatar={post?.userId?.avatar?.url}
                      nickname={post?.userId?.nickname}
                      image={post?.image?.url}
                      description={post?.description}
                      postId={post?._id}
                      isLikes={post?.isLikes}
                      isComment={post?.isComment}
                    />
                  </PostProvider>
                );
              })}
            </div>
          )}
        </div>
      )}
      <div
        className="hidden sticky top-20 grid-cols-2 lg:block"
        style={{
          height: "50rem",
        }}>
        hello
      </div>
    </div>
  );
}

export default HomePage;
