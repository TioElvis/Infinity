import { loadingUserState, userIdState, userState } from "atoms/userAtoms";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { getUserById } from "services/user";

function LoadingUserComponent() {
  const setUser = useSetRecoilState(userState);
  const setLoadingUser = useSetRecoilState(loadingUserState);
  const setUserId = useSetRecoilState(userIdState);

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
        }
      };
      getUser();
    }
  }, []);

  return <div className="loadingUser"></div>;
}

export default LoadingUserComponent;
