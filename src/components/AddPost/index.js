import "./index.css";
import { ArrowLeftIcon, PhotographIcon } from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import {
  descriptionState,
  imageState,
  isDiscardPostState,
} from "atoms/AddPost";
import Label from "components/Label";
import { useContext } from "react";
import { AddPostContext } from "contexts/AddPostContext";
import { Modal } from "@mui/material";
import AreYouSureToDiscardThePost from "components/AreYouSureToDiscardThePost";
import { UserContext } from "contexts/UserContext";

function AddPost() {
  const [image, setImage] = useRecoilState(imageState);
  const [description, setDescription] = useRecoilState(descriptionState);
  const [isDiscardPost, openIsDiscardPost] = useRecoilState(isDiscardPostState);

  const contextAddPost = useContext(AddPostContext);
  const { close: closeAddPost } = contextAddPost;

  const contextUser = useContext(UserContext);
  const { nickName } = contextUser;

  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    return reader.readAsDataURL(e.target.files[0]);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <>
      <div className="addPost">
        <header>
          <ArrowLeftIcon className="icon" onClick={closeAddPost} />
          <h4>Create Post</h4>
        </header>
        <form>
          <textarea
            className="textarea"
            onChange={handleDescription}
            placeholder={`What are you thinking, ${nickName}?`}
          />
          {image && <img src={image} />}
          <div className="addToThePost">
            <main>
              <h4>Add to the post</h4>
              <Label
                type="file"
                id="inputUploadImage"
                text="Upload Image"
                onChange={handleImage}>
                <PhotographIcon className="icon" />
              </Label>
            </main>
          </div>
        </form>
      </div>
      <Modal
        open={isDiscardPost}
        onClose={() => {
          openIsDiscardPost(false);
        }}>
        <>
          <AreYouSureToDiscardThePost />
        </>
      </Modal>
    </>
  );
}

export default AddPost;
