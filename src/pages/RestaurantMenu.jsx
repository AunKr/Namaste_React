import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AccessTimeFilled as AccessTimeFilledIcon,
  Star as StarIcon,
  Paid as PaidIcon,
} from "@mui/icons-material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Switch } from "@mui/material";

import { FETCH_MENU_URL, REST_TYPE } from "../utils/constants";
import Shimmer from "../components/Cards/Shimmer";
import OfferCard from "../components/Cards/OfferCard";
import RestaurantCarousel from "../components/Cards/RestaurantCarousel";
import Slider from "react-slick";
import RecommandedRestaurants from "../components/RecommandedRestaurants/RecommandedRestaurants";

const RestaurantMenu = () => {
  const params = useParams();
  const { restId } = params;
  const [resHeaderInfo, setResHeaderInfo] = useState(null);
  const [resOfferInfo, setResOfferInfo] = useState([]);
  const [resRecommandedInfo, setResRecommandedInfo] = useState([]);
  const [resTopPicksInfo, setResTopPicksInfo] = useState([]);
  const [restMenuDataList, setRestMenuDataList] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const fetchMenuData = async () => {
    const menuJson = await fetch(
      `${FETCH_MENU_URL}&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const resMenuData = await menuJson.json();
    const restHeaderData = resMenuData?.data?.cards[0]?.card?.card?.info;
    const restOfferData =
      resMenuData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.offers;
    const restTopPicksAndRecommandedData =
      resMenuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    let restTopPicksData = [];
    let restRecommandedData = [];
    let restMenuList = [];
    restTopPicksAndRecommandedData.forEach((val) => {
      if (val.card.card.title === "Top Picks") {
        restTopPicksData = val.card.card.carousel;
      }
      if (val.card.card.title === "Recommended") {
        restRecommandedData = val.card.card.itemCards;
      }
      console.log("val.card.card.", val.card.card);
      if (val.card.card?.categories || val.card.card?.itemCards) {
        restMenuList.push({
          title: val.card.card.title,
          count:
            val.card.card?.categories?.length ||
            val.card.card.itemCards?.length,
          itemCards: val.card.card?.categories || val.card.card.itemCards,
          showMenu: val.card.card.title === "Recommended" ? true : false,
        });
      }
    });
    console.log("restTopPicksData :", restTopPicksData);
    console.log("restRecommandedData :", restRecommandedData);
    console.log("restHeaderData :", restHeaderData);
    console.log("restOfferData :", restOfferData);
    console.log("restMenuList :", restMenuList);
    setResHeaderInfo(restHeaderData);
    setResOfferInfo(restOfferData);
    setResTopPicksInfo(restTopPicksData);
    setResRecommandedInfo(restRecommandedData);
    setRestMenuDataList(restMenuList);
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  return (
    <>
      <div className="w-3/4 m-auto">
        {resHeaderInfo && (
          <div className="mt-8">
            <div>
              <div className="flex justify-between items-center pt-4 mb-4">
                <div className="">
                  <div className="div">
                    <p className="text-2xl font-semibold mb-4">
                      {" "}
                      {resHeaderInfo.name}
                    </p>
                    <p className="text-xl text-slate-500">
                      {resHeaderInfo.cuisines.join(",")}
                    </p>
                  </div>
                  <div>
                    <p className="text-xl text-slate-500">
                      {resHeaderInfo.areaName},
                      {resHeaderInfo.sla.lastMileTravelString}
                    </p>
                  </div>
                </div>
                <button className="border rounded-md p-2 shadow-2xl">
                  <span className="flex justify-center items-center font-bold pb-2 mb-2 border-b text-xl">
                    <span className="">
                      <StarIcon
                        className={`text-xl ${
                          resHeaderInfo.avgRating > 4
                            ? "text-green-600"
                            : resHeaderInfo.avgRating > 3
                            ? "text-orange-600"
                            : resHeaderInfo.avgRating > 0
                            ? "text-red-600"
                            : "text-white"
                        }`}
                      />
                    </span>
                    <span
                      className={`
                  ${
                    resHeaderInfo.avgRating > 4
                      ? "text-green-600"
                      : resHeaderInfo.avgRating > 3
                      ? "text-orange-600"
                      : resHeaderInfo.avgRating > 0
                      ? "text-red-600"
                      : "text-white"
                  }
                  `}
                    >
                      {resHeaderInfo.avgRatingString}
                    </span>
                  </span>
                  <span className="text-center text-sm font-semibold text-slate-500">
                    {resHeaderInfo.totalRatingsString}
                  </span>
                </button>
              </div>
              <hr className="border-dashed" />
              <div className="flex justify-start items-center gap-6 mt-5">
                <div className="flex justify-start items-center gap-2">
                  <span>
                    <AccessTimeFilledIcon />
                  </span>
                  <span className="text-base font-bold">
                    {resHeaderInfo.sla.slaString}
                  </span>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <span>
                    {" "}
                    <PaidIcon />
                  </span>
                  <span className="text-base font-bold">
                    {resHeaderInfo.costForTwoMessage}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        {resOfferInfo?.length > 0 && (
          <div className="flex justify-start flex-wrap gap-4 mt-4">
            {resOfferInfo.map((val) => (
              <OfferCard offerDetails={val.info} />
            ))}
          </div>
        )}
        {resRecommandedInfo?.length > 0 && (
          <div className="mt-7">
            <FormControlLabel
              control={<Switch />}
              labelPlacement="start"
              label={REST_TYPE.VEG}
              className="m-0"
            />
            <hr className="mt-7" />
          </div>
        )}
        {resTopPicksInfo.length > 0 && (
          <Slider
            {...settings}
            className="flex flex-wrap justify-start mt-7 gap-6"
          >
            {resTopPicksInfo.map((val) => (
              <div>
                <RestaurantCarousel carouselDetails={val} />
              </div>
            ))}
          </Slider>
        )}
        {restMenuDataList.length > 0 && (
          <div className="mt-7">
            <RecommandedRestaurants menuList={restMenuDataList} />
          </div>
        )}
        {!resHeaderInfo && <Shimmer />}
      </div>
    </>
  );
};

export default RestaurantMenu;
