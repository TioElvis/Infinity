import { atom } from "recoil";

export const AddPostState = atom({
  key: "AddPostKey",
  default: false,
});

export const ImageState = atom({
  key: "ImageKey",
  default: null,
});

export const DescriptionState = atom({
  key: "DescriptionKey",
  default: null,
});

export const AreYouSureToDiscardThePostState = atom({
  key: "AreYouSureToDiscardThePostKey",
  default: false,
});
