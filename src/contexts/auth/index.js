import { createContext, useEffect, useState } from "react";
import { getUserByIdService } from "services/user/get-by-id";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem("token"));
  const [user, setUser] = useState(undefined);
  const [fullname, setFullname] = useState(undefined);
  const [nickname, setNickname] = useState(undefined);
  const [avatar, setAvatar] = useState(undefined);
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    if (Boolean(jwt)) {
      const getUser = async () => {
        const token = jwtDecode(jwt);
        const res = await getUserByIdService({ userId: token.id });
        if (res.status === 200) {
          setUser(res.data);
          setFullname(res.data.fullname);
          setNickname(res.data.nickname);
          setAvatar(res.data?.avatar?.url);
          setUserId(res.data._id);
        }
      };
      getUser();
    }
  }, [jwt]);

  return (
    <AuthContext.Provider
      value={{
        jwt,
        user,
        userId,
        fullname,
        nickname,
        avatar,
        setUserId,
        setJWT,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
