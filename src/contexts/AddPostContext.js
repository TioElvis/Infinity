import {
  descriptionState,
  imageState,
  isDiscardPostState,
  addPostState,
} from "atoms/AddPost";
import { createContext } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

export const AddPostContext = createContext();

export const AddPostProvider = ({ children }) => {
  const openAddPost = useSetRecoilState(addPostState);
  const openIsDiscardPost = useSetRecoilState(isDiscardPostState);
  const image = useRecoilValue(imageState);
  const description = useRecoilValue(descriptionState);

  const close = () => {
    // if there is img but not there is description
    if (image && !description) {
      openIsDiscardPost(true);
    }
    // if there is description but not there is img
    if (!image && description) {
      openIsDiscardPost(true);
    }
    // if there aren't img and descirption
    if (!image && !description) {
      openAddPost(false);
    }
    // if there are img and description
    if (image && description) {
      openIsDiscardPost(true);
    }
  };

  return (
    <AddPostContext.Provider value={{ close }}>
      {children}
    </AddPostContext.Provider>
  );
};
