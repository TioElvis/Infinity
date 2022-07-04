import {
  HeartIcon,
  HomeIcon,
  MenuIcon,
  PlusIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { createPostState } from "atoms/createPost";
import { avatarState, nicknameState } from "atoms/user";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { Modal } from "@mui/material";
import CreatePostComponent from "components/post-components/create-components";
import { useContext } from "react";
import { CreatePostContext } from "context/create-post";

function HeaderComponent() {
  const [createPost, openCreatePost] = useRecoilState(createPostState);
  const nickname = useRecoilValue(nicknameState);
  const avatar = useRecoilValue(avatarState);

  const contextCreatePost = useContext(CreatePostContext);
  const { closeCreatePost } = contextCreatePost;

  return (
    <>
      <header className="w-full h-20 sticky top-0 z-50 bg-navbar-background text-white">
        <nav className=" w-4/5 h-full flex mr-auto ml-auto justify-between items-center">
          <Link to="/">
            <h2 className="text-xl">Infinity</h2>
          </Link>
          <div className="hidden md:flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="p-3 rounded-sm bg-input-background-navbar text-white text-xs md:w-60 lg:w-96"
            />
            <div className="p-3 rounded-sm cursor-pointer bg-input-background-navbar">
              <SearchIcon className="w-4 cursor-pointer hover:opacity-80" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/">
              <HomeIcon className="icon" />
            </Link>
            <HeartIcon className="icon" />
            <PlusIcon
              className="icon"
              onClick={() => {
                openCreatePost(true);
              }}
            />
            <MenuIcon className="icon" />
            <Link
              to={`/profile/${nickname}`}
              className="pl-2 pr-2 h-12 flex items-center gap-2 text-sm cursor-pointer rounded-sm hover:bg-a-hover-background-navbar ">
              <p>{nickname}</p>
              {avatar && (
                <img
                  src={avatar}
                  alt=""
                  className="w-8 h-8 rounded-full object-contain"
                />
              )}
            </Link>
          </div>
        </nav>
      </header>
      <Modal
        open={createPost}
        onClose={closeCreatePost}
        children={
          <>
            <CreatePostComponent />
          </>
        }
      />
    </>
  );
}

export default HeaderComponent;