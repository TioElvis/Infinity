import { useSetRecoilState } from "recoil";
import { isDiscardPostState } from "atoms/createPostAtoms";
import { useContext } from "react";
import { CreatePostContext } from "context/CreatePostContext";

function IsDiscardPost() {
  const openIsDiscardPost = useSetRecoilState(isDiscardPostState);

  const contextCreatePost = useContext(CreatePostContext);
  const { closeAll } = contextCreatePost;

  const closeIsDiscardPost = () => {
    openIsDiscardPost(false);
  };

  return (
    <div className="w-72 h-72 m-auto mt-48 rounded p-8 text-center text-white bg-createPost-background">
      <h3>Are you sure you want to discard the post?</h3>
      <div className="flex gap-5 justify-center mt-20">
        <button
          className="button-IsDiscardPost bg-button-background-discardPost text-white "
          onClick={closeAll}>
          Discard Post
        </button>
        <button
          className="button-IsDiscardPost bg-white text-black"
          onClick={closeIsDiscardPost}>
          Back To Post
        </button>
      </div>
    </div>
  );
}

export default IsDiscardPost;
