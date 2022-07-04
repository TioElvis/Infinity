import { SearchIcon } from "@heroicons/react/outline";
import { FriendProvider } from "context/friend";
import { useEffect, useState } from "react";
import { getPeopleGiveLike } from "services/post/like/get-people-like";
import AvatarPeopleGiveLikeComponent from "./avatar";

function PeopleGiveLikeComponent({ postId }) {
  const [people, setPeople] = useState([]);
  const [loadingPeople, setLoadingPeople] = useState(true);

  useEffect(() => {
    const get = async () => {
      try {
        const res = await getPeopleGiveLike({ postId: postId });
        if (res.status === 200) {
          setPeople(res.data);
          setLoadingPeople(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    get();
  }, []);

  return (
    <>
      {!loadingPeople && (
        <div
          className="bg-peopleLikePostComponent-background text-white ml-auto mr-auto mt-32 rounded-lg"
          style={{ width: "32rem", height: "30rem" }}>
          <header className="w-full h-10 border-b-2 border-gray-800 grid place-content-center">
            <p className="text-lg">Likes {people.length}</p>
          </header>
          {people.length !== 0 && (
            <section className="w-full p-3 flex">
              <input
                type="text"
                placeholder="Search"
                className="w-4/5 bg-peopleLikePostComponent-background pr-8 pl-8 text-sm"
              />
              <SearchIcon className="icon " />
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
                  <div key={person?._id}>
                    <FriendProvider userIdToCompare={person?._id}>
                      <AvatarPeopleGiveLikeComponent
                        avatar={person?.avatar?.url}
                        nickname={person?.nickname}
                      />
                    </FriendProvider>
                  </div>
                );
              })}
            </>
          )}
        </div>
      )}
    </>
  );
}

export default PeopleGiveLikeComponent;
