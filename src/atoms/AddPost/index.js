import { atom } from "recoil";

export const addPostState = atom({
  key: "AddPostKey",
  default: false,
});

export const imageState = atom({
  key: "ImageKey",
  default: null,
});

export const descriptionState = atom({
  key: "DescriptionKey",
  default: null,
});

export const isDiscardPostState = atom({
  key: "AreYouSureToDiscardThePostKey",
  default: false,
});
