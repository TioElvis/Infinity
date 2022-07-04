import IsMyFriendOrNotComponent from "components/friend/is-my-friend-or-not";
import { Link } from "react-router-dom";

function AvatarPeopleGiveLikeComponent({ avatar, nickname }) {
  return (
    <div className="w-full flex items-center p-4 pl-8 justify-between pr-12">
      <Link className="flex items-center gap-3" to={`/profile/${nickname}`}>
        {avatar && <img src={avatar} alt="" className="w-8 h-8 rounded-full" />}
        <p className="text-xs">{nickname}</p>
      </Link>
      <IsMyFriendOrNotComponent />
    </div>
  );
}

export default AvatarPeopleGiveLikeComponent;
