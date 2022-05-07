import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [myposts, setMyPosts] = useState([]);

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem("loggedUser");
    if (loggedUserJson) {
      const user = JSON.parse(loggedUserJson);
      setUser(user);
      setMyPosts(user?.user?.post);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, myposts }}>
      {children}
    </UserContext.Provider>
  );
};
