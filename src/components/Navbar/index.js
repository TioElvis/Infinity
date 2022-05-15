import "./index.css";
import {
  HeartIcon,
  HomeIcon,
  SearchIcon,
  PlusIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { Modal, Drawer } from "@mui/material";
import { useRecoilState } from "recoil";
import { useContext, useState } from "react";
import AddPost from "components/AddPost";
import { AddPostContext } from "contexts/AddPostContext";
import { addPostState } from "atoms/AddPost";

function Navbar() {
  const [addPost, openAddPost] = useRecoilState(addPostState);
  const [menu, openMenu] = useState(false);

  const contextAddPost = useContext(AddPostContext);
  const { close: closeAddPost } = contextAddPost;

  return (
    <>
      <header className="navbar">
        <main>
          <h2 className="logo">Infinity</h2>
          <div className="inputSearchContainer">
            <input
              type="text"
              className="inputSearch"
              placeholder="Search..."
            />
            <div className="iconSearch">
              <SearchIcon className="icon" />
            </div>
          </div>
          <div className="iconsAndAvatar">
            <HomeIcon className="icon" />
            <HeartIcon className="icon" style={{ color: "var(--red)" }} />
            <PlusIcon
              className="icon"
              onClick={() => {
                openAddPost(true);
              }}
            />
            <MenuIcon
              className="icon"
              onClick={() => {
                openMenu(true);
              }}
            />
            <div className="avatar">
              <img src="" alt="" />
              <p>Name</p>
            </div>
          </div>
        </main>
      </header>
      <Modal open={addPost} onClose={closeAddPost}>
        <>
          <AddPost />
        </>
      </Modal>
    </>
  );
}

export default Navbar;
