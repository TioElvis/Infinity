import {
  DescriptionState,
  ImageState,
  AreYouSureToDiscardThePostState,
  AddPostState,
} from "atoms/AddPost";
import { createContext } from "react";
import { useRecoilState } from "recoil";

export const AddPostContext = createContext();

export const AddPostProvider = ({ children }) => {
  const [addPost, openAddPost] = useRecoilState(AddPostState);
  const [areYouSureToDiscardThePost, openAreYouSureToDiscardThePost] =
    useRecoilState(AreYouSureToDiscardThePostState);
  const [image, setImage] = useRecoilState(ImageState);
  const [description, setDescription] = useRecoilState(DescriptionState);

  const close = () => {
    // if there is img but not there is description
    if (image && !description) {
      openAreYouSureToDiscardThePost(true);
    }
    // if there is description but not there is img
    if (!image && description) {
      openAreYouSureToDiscardThePost(true);
    }
    // if there aren't img and descirption
    if (!image && !description) {
      openAddPost(false);
    }
    // if there are img and description
    if (image && description) {
      openAreYouSureToDiscardThePost(true);
    }
  };

  return (
    <AddPostContext.Provider value={{ close }}>
      {children}
    </AddPostContext.Provider>
  );
};
