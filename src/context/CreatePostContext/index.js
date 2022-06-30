import {
  createPostState,
  descriptionState,
  imageState,
  isDiscardPostState,
} from "atoms/createPostAtoms";
import { userIdState, userState } from "atoms/userAtoms";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { createPost } from "services/post";

export const CreatePostContext = createContext();

export const CreatePostProvider = ({ children }) => {
  const openCreatePost = useSetRecoilState(createPostState);
  const user = useRecoilValue(userState);
  const userId = useRecoilValue(userIdState);
  const [file, setFile] = useState(null);
  const [image, setImage] = useRecoilState(imageState);
  const [description, setDescription] = useRecoilState(descriptionState);
  const [isDiscardPost, openIsDiscardPost] = useRecoilState(isDiscardPostState);
  const [loadingCreatePost, setLoadingCreatePost] = useState(false);

  const nickname = user?.nickname;

  const navigate = useNavigate();

  const handleImage = (e) => {
    const file = new FileReader();
    file.onload = () => {
      if (file.readyState === 2) {
        setImage(file.result);
      }
      setFile(e.target.files[0]);
    };
    return file.readAsDataURL(e.target.files[0]);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const closeAll = () => {
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

  const handleCreatePost = async () => {
    setLoadingCreatePost(true);
    const formdata = new FormData();
    formdata.append("image", file);
    formdata.append("description", description);

    try {
      const res = await createPost({ post: formdata, userId: userId });
      if (res.status === 201) {
        closeAll();
        setLoadingCreatePost(false);
        navigate(`/post/${res.data}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const disable = !description && !image;

  return (
    <CreatePostContext.Provider
      value={{
        nickname,
        image,
        isDiscardPost,
        loadingCreatePost,
        disable,
        openIsDiscardPost,
        handleImage,
        handleDescription,
        handleCreatePost,
        closeAll,
        closeCreatePost,
      }}>
      {children}
    </CreatePostContext.Provider>
  );
};
