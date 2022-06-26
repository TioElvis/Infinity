import { atom } from "recoil";

export const userIdState = atom({
  key: "userIdKey",
  default: "",
});

export const userState = atom({
  key: "userKey",
  default: null,
});

export const loadingUserState = atom({
  key: "loadingUserKey",
  default: true,
});
