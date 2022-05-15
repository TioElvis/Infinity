import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [myposts, setMyPosts] = useState([]);
  const [myfriends, setMyFriends] = useState([]);

  let name = user?.user?.name;
  let nickName = user?.user?.nickName;
  let email = user?.user?.email;

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem("loggedUser");
    if (loggedUserJson) {
      const user = JSON.parse(loggedUserJson);
      setUser(user);
      setMyPosts(user?.user?.post);
      setMyFriends(user?.user?.friends);
    }
  }, []);

  return (
    <UserContext.Provider value={{ myposts, nickName, name, email, myfriends }}>
      {children}
    </UserContext.Provider>
  );
};
