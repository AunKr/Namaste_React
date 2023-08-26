import React from "react";
import { StarIcon } from "../../assets/images/index";
import { CDN_URL } from "../../utils/constants";

export default RestaurantCard = (props) => {
  const {
    cloudinaryImageId,
    id,
    name,
    cuisines,
    avgRating,
    slaString,
    costForTwoString,
  } = props.cardData;
  return (
    <div class="w-72 hover:border hover:shadow-xl pt-5 px-5 pb-4 group/item hover:cursor-pointer">
      <div class="">
        <div class="w-full">
          <img src={`${CDN_URL}/${cloudinaryImageId}`} />
        </div>
        <div class="w-full mt-7">
          <div class="text-lg font-semibold">{name}</div>
          <div class="text-sm w-full">{cuisines.join(", ")}</div>
        </div>
        <div class="flex justify-between w-full mt-4">
          <div
            class={`w-12 flex items-center justify-center border px-2 text-sm text-white rounded-md ${
              avgRating > 4
                ? "bg-green-600"
                : avgRating > 3
                ? "bg-orange-600"
                : avgRating > 0
                ? "bg-red-600"
                : "bg-white"
            }`}
          >
            <div class="fill-white">
              <StarIcon />
            </div>
            <div>{avgRating}</div>
          </div>
          <div>{slaString}</div>
          <div>{costForTwoString}</div>
        </div>
        <div class="mt-4 group/edit invisible group-hover/item:visible">
          <hr />
          <div class="flex justify-center items-center mt-4">
            <button class="uppercase font-semibold text-blue-600 hover:text-zinc-400 ">
              Quick View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
