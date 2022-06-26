import {
  createPostState,
  descriptionState,
  imageState,
  isDiscardPostState,
} from "atoms/createPostAtoms";
import { createContext } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

export const CreatePostContext = createContext();

export const CreatePostProvider = ({ children }) => {
  const openCreatePost = useSetRecoilState(createPostState);
  const [image, setImage] = useRecoilState(imageState);
  const [description, setDescription] = useRecoilState(descriptionState);
  const openIsDiscardPost = useSetRecoilState(isDiscardPostState);

  const closeAll = () => {
    setImage(null);
    setDescription("");
    openCreatePost(false);
    openIsDiscardPost(false);
  };

  const close = () => {
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

  return (
    <CreatePostContext.Provider value={{ close, closeAll }}>
      {children}
    </CreatePostContext.Provider>
  );
};
