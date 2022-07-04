import { FriendContext } from "context/friend";
import { useContext } from "react";

function IsMyFriendOrNotComponent() {
  const friendContext = useContext(FriendContext);
  const { isMyF, iHaveFR, iSentFR } = friendContext;

  return (
    <>
      {isMyF && <div>Is my friend</div>}
      {iHaveFR && <div>I have a friend request </div>}
      {iSentFR && <div>Is sent a friend request</div>}
    </>
  );
}

export default IsMyFriendOrNotComponent;
