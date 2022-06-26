import "./index.css";
import { useSetRecoilState } from "recoil";
import { isDiscardPostState } from "atoms/createPostAtoms";
import { useContext } from "react";
import { CreatePostContext } from "context/CreatePostContext";

function IsDiscardPost() {
  const openIsDiscardPostState = useSetRecoilState(isDiscardPostState);

  const contextCreatePost = useContext(CreatePostContext);
  const { closeAll } = contextCreatePost;

  const closeAreYouSureToDiscardThePost = () => {
    openIsDiscardPostState(false);
  };

  return (
    <div className="areYouSureToDiscardThePost">
      <h3>Are you sure you want to discard the post?</h3>
      <div>
        <button className="discard" onClick={closeAll}>
          Discard Post
        </button>
        <button className="back" onClick={closeAreYouSureToDiscardThePost}>
          Back To Post
        </button>
      </div>
    </div>
  );
}

export default IsDiscardPost;
