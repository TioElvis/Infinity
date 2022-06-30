import { userState } from "atoms/userAtoms";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import "./index.css";

function ProfilePage() {
  const [isThisUser, setIsThisUser] = useState(false);
  const user = useRecoilValue(userState);

  const { nickname } = useParams();

  useEffect(() => {
    if (user?.nickname === nickname) {
      setIsThisUser(true);
    }
  }, []);

  return <div></div>;
}

export default ProfilePage;
