import {
  createPostState,
  descriptionState,
  fileState,
  imageState,
  isDiscardPostState,
} from "atoms/createPost";
import { userIdState } from "atoms/user";
import { createContext, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { createPost } from "services/post/create";

export const CreatePostContext = createContext();

export const CreatePostProvider = ({ children }) => {
  const openCreatePost = useSetRecoilState(createPostState);
  const openIsDiscardPost = useSetRecoilState(isDiscardPostState);
  const userId = useRecoilValue(userIdState);
  const [file, setFile] = useRecoilState(fileState);
  const [image, setImage] = useRecoilState(imageState);
  const [description, setDescription] = useRecoilState(descriptionState);

  const [loadingCreatePost, setLoadingCreatePost] = useState(false);

  const closeAll = () => {
    setFile(null);
    setImage(null);
    setDescription("");
    openIsDiscardPost(false);
    openCreatePost(false);
  };

  const closeCreatePost = () => {
    if (image && !description) {
      openIsDiscardPost(true);
    }
    if (!image && description) {
      openIsDiscardPost(true);
    }
    if (!image && !description) {
      openCreatePost(false);
    }
    if (image && description) {
      openIsDiscardPost(true);
    }
  };

  const handleImage = ({ target }) => {
    const file = new FileReader();
    file.onload = () => {
      if (file.readyState === 2) {
        setImage(file.result);
      }
      setFile(target.files[0]);
    };
    return file.readAsDataURL(target.files[0]);
  };

  const handleCreatePost = async () => {
    setLoadingCreatePost(true);
    const formdata = new FormData();
    formdata.append("image", file);
    formdata.append("description", description);

    try {
      const res = await createPost({ post: formdata, userId: userId });
      if (res.status === 201) {
        setLoadingCreatePost(false);
        closeAll();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const disable = !description && !image;

  return (
    <CreatePostContext.Provider
      value={{
        loadingCreatePost,
        disable,
        closeCreatePost,
        handleCreatePost,
        handleImage,
        closeAll,
      }}
      children={children}></CreatePostContext.Provider>
  );
};
