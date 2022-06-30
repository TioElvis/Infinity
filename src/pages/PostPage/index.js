import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "services/post";

function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const post = async () => {
      const res = await getPostById({ postId: postId });
      if (res.status === 200) {
        setPost(res.data);
      }
    };
    post();
  }, [postId]);

  return <div>a</div>;
}

export default PostPage;
