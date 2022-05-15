import "./index.css";
import {
  addPostState,
  descriptionState,
  imageState,
  isDiscardPostState,
} from "atoms/AddPost";
import { useSetRecoilState } from "recoil";

function AreYouSureToDiscardThePost() {
  const openIsDiscardPostState = useSetRecoilState(isDiscardPostState);
  const setImage = useSetRecoilState(imageState);
  const setDescription = useSetRecoilState(descriptionState);
  const openAddPost = useSetRecoilState(addPostState);

  const closeAll = () => {
    setImage(null);
    setDescription("");
    openAddPost(false);
    openIsDiscardPostState(false);
  };

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

export default AreYouSureToDiscardThePost;
