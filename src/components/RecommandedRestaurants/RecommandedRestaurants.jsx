import { useState } from "react";
import { Button } from "@mui/material";

import {
  Star as StarIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Restaurant as RestaurantIcon,
  DiamondTwoTone as DiamondIcon,
} from "@mui/icons-material";

import { RECOMMENDED_LIST_IMG_URL } from "../../utils/constants";
import vegIcon from "../../assets/veg_icon.png";
import nonVegIcon from "../../assets/non_veg_icon.png";

const RecommandedRestaurants = ({ menuList }) => {
  const [menuDataList, setMenuDataList] = useState(menuList || []);
  const [anchor, setAnchor] = useState(false);
  const showMenuData = (title) => {
    const newMenuDataList = menuDataList.map((val) => {
      if (val.title === title) {
        const currentShowMenuValue = val.showMenu;
        val.showMenu = !currentShowMenuValue;
        return val;
      }
      return val;
    });
    setMenuDataList(newMenuDataList);
  };

  const handleMenuClick = (title, count) => {
    setAnchor(false);
    const element = document.getElementById(`${title}-${count}`);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      {menuDataList.map((menuData) => (
        <div id={`${menuData.title}-${menuData.count}`}>
          <div className="text-2xl font-bold mb-7 flex justify-between items-center">
            <h3>{`${menuData.title}(${menuData.count})`}</h3>
            <div
              className="hover:cursor-pointer"
              onClick={() => showMenuData(menuData.title)}
            >
              {menuData.showMenu ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )}
            </div>
          </div>
          {menuData.showMenu &&
            menuData.itemCards.map((itemInfo) => (
              <>
                <div className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className="">
                      <div className="flex justify-start items-center gap-2">
                        {itemInfo?.card?.info?.isVeg ? (
                          <div className="w-5">
                            <img src={vegIcon} alt="veg" />
                          </div>
                        ) : (
                          <div className="w-5">
                            <img src={nonVegIcon} alt="non-veg" />
                          </div>
                        )}
                        {itemInfo?.card?.info?.ribbon.text && (
                          <div className="flex justify-center items-center text-base text-orange-400">
                            <span>
                              <StarIcon />
                            </span>
                            <span className="font-semibold">
                              {itemInfo?.card?.info?.ribbon.text}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="text-lg font-semibold">
                        {itemInfo?.card?.info.name}
                      </div>
                      <div className="text-base font-normal mt-1">{`₹${
                        itemInfo?.card?.info.defaultPrice / 100 ||
                        itemInfo?.card?.info.price / 100
                      }`}</div>
                    </div>
                    <div className="relative">
                      {itemInfo?.card?.info.imageId && (
                        <div>
                          <img
                            className="rounded-md recommended-img"
                            src={`${RECOMMENDED_LIST_IMG_URL}/${itemInfo?.card?.info.imageId}`}
                            alt={`recommed_${itemInfo?.card?.info.imageId}`}
                          />
                        </div>
                      )}
                      <div
                        className={`absolute ${
                          !itemInfo?.card?.info.imageId
                            ? "-left-24 top-8"
                            : "left-7 -bottom-5"
                        }`}
                      >
                        <Button
                          className="success-btn"
                          color="success"
                          variant="outlined"
                        >
                          ADD
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-5" />
              </>
            ))}
        </div>
      ))}
      <div className="fixed bottom-9 browser-button flex justify-center items-center hover:cursor-pointer">
        <div
          className="relative translate-y-1/4 flex justify-center items-center"
          onClick={(e) => setAnchor(true)}
        >
          <div className="rounded-3xl py-2.5 gap-1 px-6 text-base font-bold text-white bg-blue-400 flex justify-center">
            <div>
              <RestaurantIcon className="text-lg" />
            </div>
            <div>BROWSE MENU</div>
          </div>
        </div>
        {anchor && (
          <>
            <div
              className="w-full fixed top-0 right-0 left-0 bottom-0 backdrop z-10 h-full"
              onClick={() => {
                console.log("in backdrop");
                setAnchor(false);
              }}
            ></div>
            <div className="absolute bg-white shadow-2xl z-50 pt-8 pr-6 pb-7 pl-10 bottom-9 rounded max-h-80 min-width-menu overflow-y-scroll">
              {menuDataList.map((list) => (
                <div
                  className={`flex justify-between items-center text-xl mb-5 relative ${
                    list.showMenu ? "font-bold" : ""
                  }`}
                  onClick={() => handleMenuClick(list.title, list.count)}
                >
                  <div>
                    {list.showMenu && (
                      <DiamondIcon className="text-blue-500 text-lg absolute top-1 -left-6" />
                    )}
                    {list.title}
                  </div>
                  <div>{list.count}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default RecommandedRestaurants;
