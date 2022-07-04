import {
  avatarState,
  loadingUserState,
  nameState,
  nicknameState,
  userIdState,
  userState,
} from "atoms/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { getUserById } from "services/user/get-by-id";

function LoadingUserComponent() {
  const setUser = useSetRecoilState(userState);
  const setUserId = useSetRecoilState(userIdState);
  const setName = useSetRecoilState(nameState);
  const setnickname = useSetRecoilState(nicknameState);
  const setAvatar = useSetRecoilState(avatarState);
  const setLoadingUser = useSetRecoilState(loadingUserState);

  const loggedUserId = window.localStorage.getItem("loggedUserId");

  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedUserId) {
      navigate("/auth/login");
    }
  }, []);

  useEffect(() => {
    if (loggedUserId) {
      const getUserId = JSON.parse(loggedUserId);
      const userId = getUserId.replace(/[ '"]+/g, " ");
      const getUser = async () => {
        const res = await getUserById({ userId: userId });
        if (res.status === 200) {
          setUser(res.data);
          setUserId(res.data?._id);
          setLoadingUser(false);
          setName(res.data?.name);
          setnickname(res.data?.nickname);
          setAvatar(res.data?.avatar?.url);
        }
      };
      getUser();
    }
  }, []);

  return <div></div>;
}

export default LoadingUserComponent;
