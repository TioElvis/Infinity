import { userIdState } from "atoms/user";
import { createContext, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { getIHaveFR } from "services/friend/friend-request/i-have";
import { getISentFR } from "services/friend/friend-request/i-sent";
import { getIsMyF } from "services/friend/is-my";

export const FriendContext = createContext();

export const FriendProvider = ({ children, userIdToCompare }) => {
  const userId = useRecoilValue(userIdState);
  const [isMyF, setIsMyF] = useState(false);
  const [iHaveFR, setIHaveFR] = useState(false);
  const [iSentFR, setISentFR] = useState(false);

  useEffect(() => {
    if (userId !== userIdToCompare) {
      const get = async () => {
        try {
          const res = await getIHaveFR({
            userId: userId,
            userIdToCompare: userIdToCompare,
          });
          if (res.status === 200) {
            setIHaveFR(res.data);
          }
        } catch (err) {
          console.log(err);
        }
      };
      get();
    }
  }, []);

  useEffect(() => {
    if (userId !== userIdToCompare) {
      const get = async () => {
        try {
          const res = await getISentFR({
            userId: userId,
            userIdToCompare: userIdToCompare,
          });
          if (res.status === 200) {
            setISentFR(res.data);
          }
        } catch (err) {
          console.log(err);
        }
      };
      get();
    }
  }, []);

  useEffect(() => {
    if (userId !== userIdToCompare) {
      const get = async () => {
        const res = await getIsMyF({
          userId: userId,
          userIdToCompare: userIdToCompare,
        });
        if (res.status === 200) {
          setIsMyF(res.data);
        }
      };
      get();
    }
  }, []);

  return (
    <FriendContext.Provider
      value={{
        isMyF,
        iHaveFR,
        iSentFR,
      }}>
      {children}
    </FriendContext.Provider>
  );
};
