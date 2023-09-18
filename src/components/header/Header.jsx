import React from "react";
import IconWithTitle from "../iconTitle/IconWithTitle";
import { useUser } from "../../contexts/UserProvider";

const Header = () => {
  const { user, setUser } = useUser();
  return (
    <header className="flex flex-wrap z-50 w-full text-sm py-4 bg-yellow border-b-4 border-b-gray">
      <div className="centering">
        <nav
<<<<<<< HEAD
          className="flex flex-nowrap w-full sm:flex sm:items-center sm:justify-between"
=======
          class="flex flex-nowrap w-full sm:flex sm:items-center sm:justify-between"
>>>>>>> 559b17f (changes to header styling, userContext and userservice)
          aria-label="Global"
        >
          <IconWithTitle />
          <div id="navbar-image-and-text-2" className="grow block gap-2">
<<<<<<< HEAD
              <div className="flex flex-row items-center justify-end">
              {user?.user?.username && 
              <div className=" bg-yellow-dark rounded-2xl pr-14 pl-5 py-0.5">
                <p className="text-white">{user?.user?.username}</p>
              </div>}
              <img
                className="w-12 h-auto absolute  bg-yellow-dark rounded-full"
                src="./src/assets/profileUser.svg"
                alt="Logo"
                href="profile"
              />
            </div>
=======
            <a href="">
              <div className="flex flex-row items-center justify-end">
                <div className=" bg-yellow-dark rounded-2xl pr-14 pl-5 py-0.5">
                  <p className="text-white">{user?.user?.username}</p>
                </div>
                <img
                  className="w-12 h-auto absolute  bg-yellow-dark rounded-full"
                  src="./src/assets/profileUser.svg"
                  alt="Logo"
                />
              </div>
            </a>
>>>>>>> 51e6c8d (routing to profile page)
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
