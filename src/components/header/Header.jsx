import React from "react";
import IconWithTitle from "../iconTitle/IconWithTitle";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../store/userSlice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleLogout() {
    dispatch(removeUser());
  }

  return (
    <header className="flex flex-wrap z-50 w-full text-sm py-4 bg-yellow border-b-4 border-b-gray">
      <div className="centering">
        <nav
          className="flex flex-nowrap w-full sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div onClick={() => navigate("/")}>
            <IconWithTitle />
          </div>
          {user?.username && (
            <>
              <div id="navbar-image-and-text-2" className="grow block gap-2">
                <div
                  className="flex flex-row items-center justify-end"
                  onClick={() => navigate("/profile")}
                >
                  {user.username && (
                    <div className=" bg-yellow-dark rounded-2xl pr-14 pl-5 py-0.5">
                      <p className="text-white">{user?.username}</p>
                    </div>
                  )}
                  <img
                    className="w-12 h-auto absolute  bg-yellow-dark rounded-full"
                    src="/assets/profileUser.svg"
                    alt="Logo"
                    href="profile"
                  />
                </div>
              </div>
            </>
          )}
          {user?.username && (
            <div className="flex flex-row items-center justify-end">
              <button
                onClick={handleLogout}
                className="bg-yellow-dark rounded-2xl pr-5 pl-5 py-0.5"
              >
                <p className="text-white">Logout</p>
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
