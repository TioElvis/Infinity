import {
  HeartIcon,
  HomeIcon,
  MenuIcon,
  PlusIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { AuthContext } from "contexts/auth";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

function HeaderComponent() {
  const { nickname, avatar } = useContext(AuthContext);

  return (
    <header className="w-full h-20 sticky top-0 z-50 bg-navbar-background text-white">
      <nav className=" w-4/5 h-full flex mr-auto ml-auto justify-between items-center">
        <NavLink to="/">
          <h2 className="text-xl">Infinity</h2>
        </NavLink>
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
          <NavLink to="/">
            <HomeIcon className="icon" />
          </NavLink>
          <HeartIcon className="icon" />
          <PlusIcon className="icon" />
          <MenuIcon className="icon" />
          <NavLink
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
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;
