const { userIdState } = require("atoms/userAtoms");
const { useState, useEffect } = require("react");
const { useRecoilValue } = require("recoil");
const { isMyFriend } = require("services/friend");

const IsMyFriend = ({ userIdCompare }) => {
  const userId = useRecoilValue(userIdState);
  const [isMyFriendState, setIsMyFriendState] = useState(null);

  useEffect(() => {
    if (userId !== userIdCompare) {
      const getIsMyFriend = async () => {
        const res = await isMyFriend({
          userId: userId,
          userIdCompare: userIdCompare,
        });
        if (res.status === 200) {
          setIsMyFriendState(res.data);
        }
      };
      getIsMyFriend();
    }
  }, []);

  if (userId === userIdCompare) {
    return <div>It's me</div>;
  }

  return (
    <>{IsMyFriend ? <div>Is my friend</div> : <div>Not is my friend</div>}</>
  );
};

export default IsMyFriend;
