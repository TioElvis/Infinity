import {
  ChatIcon,
  DotsVerticalIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartRed } from "@heroicons/react/solid";
import { PostContext } from "context/post";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "@mui/material";
import PeopleGiveLikeComponent from "./people-give-like";

function PostComponent({
  image,
  description,
  nickname,
  avatar,
  postId,
  isLikes,
  isComment,
}) {
  const contextPost = useContext(PostContext);
  const { likes, loadingLikes, handleLike, LikeThat } = contextPost;
  const [peopleGivelikeComponent, openPeopleGivelikeComponent] =
    useState(false);

  return (
    <>
      <article
        style={{
          width: "32rem",
        }}
        className="mt-8 mb-8 ml-auto mr-auto text-white border-solid border-border-color-post border-2 break-words">
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
                  ? "text-sm text-black pl-4 pt-1"
                  : "text-sm text-black pl-4 pt-2 pb-2"
              }>
              {description}
            </p>
          )}
          {image && (
            <img src={image} alt="" className="mt-1 w-full p-1.5 max-h-120" />
          )}
        </Link>
        <div className="flex gap-2 p-4">
          {isLikes && (
            <div className="flex items-center text-xs gap-1 cursor-pointer">
              {loadingLikes ? (
                <span />
              ) : (
                <>
                  {LikeThat ? (
                    <HeartRed
                      className="icon text-iconLike-backgroundColor-post"
                      onClick={handleLike}
                    />
                  ) : (
                    <HeartIcon
                      className="icon text-black"
                      onClick={handleLike}
                    />
                  )}
                  <p
                    className="text-xs text-black"
                    onClick={() => openPeopleGivelikeComponent(true)}>
                    {likes}
                  </p>
                </>
              )}
            </div>
          )}
          {isComment && (
            <>
              <Link to={`/post/${postId}`} className="flex items-center gap-1">
                <ChatIcon className="icon text-black" />
                <p className="text-black text-xs"></p>
              </Link>
            </>
          )}
        </div>
      </article>
      <Modal
        open={peopleGivelikeComponent}
        onClose={() => openPeopleGivelikeComponent(false)}
        children={
          <>
            <PeopleGiveLikeComponent postId={postId} />
          </>
        }
      />
    </>
  );
}

export default PostComponent;
