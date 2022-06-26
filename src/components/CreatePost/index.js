import "./index.css";
import Label from "components/Label";
import { ArrowLeftIcon, PhotographIcon } from "@heroicons/react/outline";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  descriptionState,
  imageState,
  isDiscardPostState,
} from "atoms/createPostAtoms";
import { Modal } from "@mui/material";
import { useContext, useState } from "react";
import { createPost } from "services/post";
import { userIdState, userState } from "atoms/userAtoms";
import IsDiscardPost from "components/isDiscardPost";
import { CreatePostContext } from "context/CreatePostContext";

function CreatePostComponent() {
  const user = useRecoilValue(userState);
  const userId = useRecoilValue(userIdState);
  const [file, setFile] = useState(null);
  const [image, setImage] = useRecoilState(imageState);
  const [description, setDescription] = useRecoilState(descriptionState);
  const [isDiscardPost, openIsDiscardPost] = useRecoilState(isDiscardPostState);
  const [loadingPost, setLoadingPost] = useState(false);

  const contextCreatePost = useContext(CreatePostContext);
  const { closeAll } = contextCreatePost;

  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
      setFile(e.target.files[0]);
    };
    return reader.readAsDataURL(e.target.files[0]);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const closeIsDiscardPost = () => {
    openIsDiscardPost(false);
  };

  const handleCreatePost = async () => {
    setLoadingPost(true);
    const formdata = new FormData();
    formdata.append("image", file);
    formdata.append("description", description);

    const res = await createPost({ post: formdata, userId: userId });

    if (res.status === 201) {
      closeAll();
    }
  };

  const disable = !description && !image;

  return (
    <>
      <div className="addPost">
        {loadingPost ? (
          <section>
            <h4>Loading...</h4>
          </section>
        ) : (
          <>
            <header>
              <ArrowLeftIcon className="icon" />
              <h4>Create Post</h4>
              <button disabled={disable} onClick={handleCreatePost}>
                Create
              </button>
            </header>
            <textarea
              onChange={handleDescription}
              placeholder={`What are you thinking,  ${user.nickname}?`}
            />
            {image && <img src={image} alt="" />}
            <div className="add">
              <Label
                type="file"
                id="inputUploadImage"
                text="Upload Image"
                accept=".jpg"
                onChange={handleImage}>
                <PhotographIcon className="icon" />
              </Label>
            </div>
          </>
        )}
      </div>
      <Modal open={isDiscardPost} onClose={closeIsDiscardPost}>
        <>
          <IsDiscardPost />
        </>
      </Modal>
    </>
  );
}

export default CreatePostComponent;
