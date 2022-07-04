import { ArrowLeftIcon, PhotographIcon } from "@heroicons/react/outline";
import { Modal } from "@mui/material";
import {
  descriptionState,
  imageState,
  isDiscardPostState,
} from "atoms/createPost";
import { nicknameState } from "atoms/user";
import { CreatePostContext } from "context/create-post";
import { useContext } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import IsDiscardPostComponent from "./is-discard";
import Label from "./label";

function CreatePostComponent() {
  const image = useRecoilValue(imageState);
  const nickname = useRecoilValue(nicknameState);
  const setDescription = useSetRecoilState(descriptionState);
  const [isDiscardPost, openIsDiscardPost] = useRecoilState(isDiscardPostState);

  const contextCreatePost = useContext(CreatePostContext);
  const {
    loadingCreatePost,
    disable,
    closeCreatePost,
    handleCreatePost,
    handleImage,
  } = contextCreatePost;

  return (
    <>
      <div
        className="pt-3 pb-3 m-auto  mt-48 text-white rounded-lg bg-createPost-background"
        style={{
          width: "30rem",
        }}>
        {loadingCreatePost ? (
          <section className="grid place-content-center">
            <h4>Loading...</h4>
          </section>
        ) : (
          <>
            <header className="w-full pl-8 pr-8 flex justify-between">
              <ArrowLeftIcon className="icon" onClick={closeCreatePost} />
              <h4>Create Post</h4>
              <button
                disabled={disable}
                onClick={handleCreatePost}
                className="text-white bg-createPost-background cursor-pointer disabled:cursor-not-allowed">
                Create
              </button>
            </header>
            <textarea
              onChange={({ target }) => {
                setDescription(target.value);
              }}
              placeholder={`What are you thinking,  ${nickname}?`}
              className="w-full h-32 p-5 text-sm text-white bg-createPost-background "
            />
            {image && (
              <img
                src={image}
                alt=""
                className="m-auto rounded"
                style={{
                  maxWidth: "95%",
                  maxHeight: "28rem",
                }}
              />
            )}
            <div>
              <Label
                type="file"
                id="inputUploadImage"
                text="Upload Image"
                onChange={handleImage}
                className="w-1/4 flex flex-col text-xs text-gray-200 cursor-pointer items-center mt-4">
                <PhotographIcon className="w-6 hover:opacity-80  text-blue-400" />
              </Label>
            </div>
          </>
        )}
      </div>
      <Modal
        open={isDiscardPost}
        onClose={() => {
          openIsDiscardPost(false);
        }}
        children={
          <>
            <IsDiscardPostComponent />
          </>
        }
      />
    </>
  );
}

export default CreatePostComponent;
