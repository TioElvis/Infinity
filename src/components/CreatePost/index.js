import Label from "components/Label";
import { ArrowLeftIcon, PhotographIcon } from "@heroicons/react/outline";
import { Modal } from "@mui/material";
import { useContext } from "react";
import IsDiscardPost from "components/isDiscardPost";
import { CreatePostContext } from "context/CreatePostContext";

function CreatePostComponent() {
  const contextCreatePost = useContext(CreatePostContext);
  const {
    nickname,
    image,
    isDiscardPost,
    loadingCreatePost,
    disable,
    openIsDiscardPost,
    handleImage,
    handleDescription,
    handleCreatePost,
    closeCreatePost,
  } = contextCreatePost;

  return (
    <>
      <div
        className="pt-3 pb-3 rounded-sm m-auto  mt-48 text-white bg-createPost-background rounded-lg"
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
              onChange={handleDescription}
              placeholder={`What are you thinking,  ${nickname}?`}
              className="w-full h-32 p-5 text-sm text-white bg-createPost-background"
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
        }}>
        <>
          <IsDiscardPost />
        </>
      </Modal>
    </>
  );
}

export default CreatePostComponent;
