import IsMyFriend from "components/IsMyFriend";
import { Link } from "react-router-dom";

function AvatarPost({ userIdCompare, avatar, nickname }) {
  return (
    <div className="w-full flex items-center p-4 justify-between pr-12">
      <Link
        className="flex items-center gap-3"
        to={`/profile/${userIdCompare}`}>
        {avatar && <img src={avatar} alt="" className="w-8 h-8 rounded-full" />}
        {nickname}
      </Link>
      <IsMyFriend userIdCompare={userIdCompare} />
    </div>
  );
}

export default AvatarPost;
