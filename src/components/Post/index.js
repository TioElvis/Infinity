import {
  ChatIcon,
  DotsVerticalIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartRed } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { PostContext } from "context/PostContext";
import { useContext, useState } from "react";
import { Modal } from "@mui/material";
import PeopleLikePostComponent from "components/PeopleLikePostComponent";

function Post() {
  const [peopleLikePostComponent, openPeopleLikePostComponent] =
    useState(false);
  const contextPost = useContext(PostContext);
  const {
    likes,
    image,
    description,
    avatar,
    nickname,
    loadingLikes,
    handleLike,
    postId,
    Ilike,
    isComment,
    comments,
  } = contextPost;

  return (
    <>
      <article
        className="mt-8 mb-8 ml-auto mr-auto text-white border-solid border-border-color-post border-2 break-words"
        style={{
          width: "30rem",
          maxHeight: "44rem",
        }}>
        <header className="flex pl-3 pr-3 pt-1 justify-between items-center">
          <Link
            to={`/profile/${nickname}`}
            className="flex gap-1 items-center ">
            {avatar && (
              <img src={avatar} alt="" className="w-8 h-8 rounded-full" />
            )}
            <p className="text-xs text-black ">{nickname}</p>
          </Link>
          <DotsVerticalIcon className="icon text-black" />
        </header>
        <Link to={`/post/${postId}`}>
          {description && (
            <p
              className={
                image
                  ? "text-sm text-black pr-3 pl-3 pt-1"
                  : "text-sm text-black pr-5 pl-5 pt-2"
              }>
              {description}
            </p>
          )}
          {image && <img src={image} alt="" className="mt-1 w-full" />}
        </Link>
        <div className="flex gap-2 p-3">
          <div className="flex items-center text-xs gap-1 cursor-pointer">
            {loadingLikes ? (
              <span />
            ) : (
              <>
                {Ilike ? (
                  <HeartRed
                    className="icon text-iconLike-backgroundColor-post"
                    onClick={handleLike}
                  />
                ) : (
                  <HeartIcon className="icon text-black" onClick={handleLike} />
                )}
                <p
                  className="text-xs text-black"
                  onClick={() => {
                    openPeopleLikePostComponent(true);
                  }}>
                  {likes}
                </p>
              </>
            )}
          </div>
          {isComment && (
            <>
              <Link to={`/post/${postId}`} className="flex items-center gap-1">
                <ChatIcon className="icon text-black" />
                <p className="text-black text-xs">{comments}</p>
              </Link>
            </>
          )}
        </div>
      </article>
      <Modal
        open={peopleLikePostComponent}
        onClose={() => openPeopleLikePostComponent(false)}>
        <>
          <PeopleLikePostComponent postId={postId} />
        </>
      </Modal>
    </>
  );
}

export default Post;
