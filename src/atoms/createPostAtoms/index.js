import { atom } from "recoil";

export const createPostState = atom({
  key: "createPostKey",
  default: false,
});

export const imageState = atom({
  key: "imageKey",
  default: null,
});

export const descriptionState = atom({
  key: "descriptionKey",
  default: "",
});

export const isDiscardPostState = atom({
  key: "isDiscardPostKey",
  default: false,
});
