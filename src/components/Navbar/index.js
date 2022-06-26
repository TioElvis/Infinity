import "./index.css";
import {
  HeartIcon,
  HomeIcon,
  MenuIcon,
  PlusIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { Modal } from "@mui/material";
import { createPostState } from "atoms/createPostAtoms";
import { userState } from "atoms/userAtoms";
import { CreatePostContext } from "context/CreatePostContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import CreatePostComponent from "components/CreatePost";

function Navbar() {
  const user = useRecoilValue(userState);
  const [addP, openAddP] = useRecoilState(createPostState);

  const contextCreatePost = useContext(CreatePostContext);
  const { close } = contextCreatePost;

  const open = () => {
    openAddP(true);
  };

  return (
    <>
      <header className="header">
        <nav>
          <Link to="/">
            <h2>Infinity</h2>
          </Link>
          <div className="inputSearch">
            <input type="text" placeholder="Search..." />
            <div>
              <SearchIcon className="icon" />
            </div>
          </div>
          <div className="nav">
            <Link to="/">
              <HomeIcon className="icon" />
            </Link>
            <HeartIcon className="icon" />
            <PlusIcon className="icon" onClick={open} />
            <MenuIcon className="icon" />
            <div>
              <Link to={`/profile/${user?.nickname}`}>
                {user && <p>{user.nickname}</p>}
                {user?.avatar && <img src={user?.avatar?.url} alt="" />}
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <Modal open={addP} onClose={close}>
        <>
          <CreatePostComponent />
        </>
      </Modal>
    </>
  );
}

export default Navbar;
