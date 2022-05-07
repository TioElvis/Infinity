import "./index.css";
import { ArrowLeftIcon, PhotographIcon } from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import {
  AreYouSureToDiscardThePostState,
  DescriptionState,
  ImageState,
} from "atoms/AddPost";
import Label from "components/Label";
import { useContext } from "react";
import { AddPostContext } from "contexts/AddPostContext";
import { Modal } from "@mui/material";
import AreYouSureToDiscardThePost from "components/AreYouSureToDiscardThePost";

function AddPost() {
  const [image, setImage] = useRecoilState(ImageState);
  const [description, setDescription] = useRecoilState(DescriptionState);
  const [areYouSureToDiscardThePost, openAreYouSureToDiscardThePost] =
    useRecoilState(AreYouSureToDiscardThePostState);

  const contextAddPost = useContext(AddPostContext);
  const { close: closeAddPost } = contextAddPost;

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
            placeholder={`What are you thinking, nickName?`}
          />
          {image && <img src={image} />}
          <div className="addToThePost">
            <main>
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
        open={areYouSureToDiscardThePost}
        onClose={() => {
          openAreYouSureToDiscardThePost(false);
        }}>
        <>
          <AreYouSureToDiscardThePost />
        </>
      </Modal>
    </>
  );
}

export default AddPost;
