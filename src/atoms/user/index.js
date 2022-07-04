import { atom } from "recoil";

export const userState = atom({
  key: "userKey",
  default: null,
});

export const userIdState = atom({
  key: "userIdKey",
  default: null,
});

export const nameState = atom({
  key: "nameState",
  default: null,
});

export const nicknameState = atom({
  key: "nicknameKey",
  default: null,
});

export const avatarState = atom({
  key: "avatarState",
  default: null,
});

export const loadingUserState = atom({
  key: "loadingUserKey",
  default: true,
});
