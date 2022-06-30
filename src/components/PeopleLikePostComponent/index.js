import AvatarPost from "components/PersonComponent";
import { useEffect, useState } from "react";
import { getPeopleLikePost } from "services/post";

function PeopleLikePostComponent({ postId }) {
  const [people, setPeople] = useState([]);
  const [loadingPeople, setLoadinPeople] = useState(true);

  useEffect(() => {
    const peopleLikePost = async () => {
      const res = await getPeopleLikePost({ postId: postId });
      if (res.status === 200) {
        setPeople(res.data);
        setLoadinPeople(false);
      }
    };
    peopleLikePost();
  }, []);

  return (
    <>
      {loadingPeople ? (
        <div></div>
      ) : (
        <div
          className="bg-peopleLikePostComponent-background text-white ml-auto mr-auto mt-32 rounded-lg"
          style={{ width: "32rem", height: "30rem" }}>
          <header className="w-full h-10 border-b-2 border-gray-800 grid place-content-center">
            <p className="text-xl">Likes</p>
          </header>
          {people.length !== 0 && (
            <section className="w-full p-2">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-peopleLikePostComponent-background pr-8 pl-8 text-sm"
              />
            </section>
          )}
          {people.length === 0 ? (
            <span className="w-full grid place-content-center mt-8">
              <p>No one has liked this post</p>
            </span>
          ) : (
            <>
              {people.map((person) => {
                return (
                  <AvatarPost
                    key={person?._id}
                    userIdCompare={person?._id}
                    avatar={person?.avatar?.url}
                    nickname={person?.nickname}
                  />
                );
              })}
            </>
          )}
        </div>
      )}
    </>
  );
}

export default PeopleLikePostComponent;
