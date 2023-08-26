import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  SigninIcon,
  HelpIcon,
  CartIcon,
  SearchIcon,
} from "../../assets/images/index";

export default Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  return (
    <div class="py-0 px-20 header">
      <div class="h-20 flex justify-between">
        <div
          class="h-20 w-20 hover:cursor-pointer"
          onClick={(e) => navigate("/")}
        >
          <img class="h-full w-full" src={logo} alt="" />
        </div>
        <div class="flex flex-1 flex-row-reverse">
          <ul class="flex items-center gap-4">
            <li
              class="flex items-center justify-center gap-1 mr-8 text-xl font-light text-slate-950 hover:cursor-pointer"
              onClick={(e) => navigate("/search")}
            >
              <SearchIcon />
              Search
            </li>
            <li class="flex items-center justify-center gap-1 mr-8 text-xl font-light text-slate-950 hover:cursor-pointer">
              <HelpIcon />
              Help
            </li>
            <li
              class="flex items-center justify-center gap-1 mr-8 text-xl font-light text-slate-950 hover:cursor-pointer"
              onClick={() => setLoggedIn(!loggedIn)}
            >
              <SigninIcon />
              {!loggedIn ? "Sign In" : "Logout"}
            </li>
            <li class="flex items-center justify-center gap-1 mr-8 text-xl font-light text-slate-950 hover:cursor-pointer">
              <CartIcon />
              Cart
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
