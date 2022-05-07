import "./index.css";
import {
  AddPostState,
  AreYouSureToDiscardThePostState,
  DescriptionState,
  ImageState,
} from "atoms/AddPost";
import { useRecoilState } from "recoil";

function AreYouSureToDiscardThePost() {
  const [areYouSureToDiscardThePost, openAreYouSureToDiscardThePost] =
    useRecoilState(AreYouSureToDiscardThePostState);
  const [image, setImage] = useRecoilState(ImageState);
  const [description, setDescription] = useRecoilState(DescriptionState);
  const [openAddPost, setOpenAddPost] = useRecoilState(AddPostState);

  const closeAll = () => {
    setImage(null);
    setDescription("");
    setOpenAddPost(false);
    openAreYouSureToDiscardThePost(false);
  };

  const closeAreYouSureToDiscardThePost = () => {
    openAreYouSureToDiscardThePost(false);
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
