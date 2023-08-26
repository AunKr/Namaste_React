import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import RestaurantCard from "../components/Cards/RestaurantCard";
import { API_URL } from "../utils/constants";
import Shimmer from "../components/Cards/Shimmer";

export default Home = () => {
  const [searchType, setSeachType] = useState("relevance");
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    console.log("json :", json);
    const restData = json.data.cards.filter(
      (val) =>
        val?.card?.card?.gridElements?.infoWithStyle?.restaurants &&
        val.card?.card?.id === "top_brands_for_you"
    );
    console.log(
      "restData",
      restData[0].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestaurantData(
      restData[0].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleFilter = (type) => {
    console.log("type", type);
    let filterData = [];
    if (type === "relevance") {
      filterData = restaurantData;
    } else {
      filterData = restaurantData.toSorted((a, b) => {
        switch (type) {
          case "avgRating":
            return a.info.avgRating > b.info.avgRating ? -1 : 1;
          case "deliveryTime":
            return a.info.deliveryTime > b.info.deliveryTime ? 1 : -1;
          case "low_high_costForTwo":
            return a.info.costForTwo > b.info.costForTwo ? 1 : -1;
          case "high_low_costForTwo":
            return a.info.costForTwo > b.info.costForTwo ? -1 : 1;
          default:
            return restaurantData;
        }
      });
    }
    setRestaurantData(filterData);
  };

  return (
    <>
      <Header />
      {restaurantData?.length === 0 && <Shimmer />}
      {restaurantData?.length > 0 && (
        <div>
          <div class="mt-5 py-0 px-20">
            <div class="flex justify-between items-center">
              <div class="mb-2 text-3xl font-semibold">{`${
                restaurantData.length
              } ${
                restaurantData.length > 1 ? "restaturants" : "restaturant"
              }`}</div>
              <div class="flex justify-between items-center gap-5 text-lg">
                <div
                  onClick={() => {
                    setSeachType("relevance");
                    handleFilter("relevance");
                  }}
                  class={`leading-12 ${
                    searchType === "relevance"
                      ? "text-black border-b-2 border-solid border-black"
                      : "text-gray-500"
                  } hover: cursor-pointer`}
                >
                  <div>Relevance</div>
                </div>
                <div
                  onClick={() => {
                    setSeachType("avgRating");
                    handleFilter("avgRating");
                  }}
                  class={`leading-12 ${
                    searchType === "avgRating"
                      ? "text-black border-b-2 border-solid border-black"
                      : "text-gray-500"
                  } hover: cursor-pointer`}
                >
                  Most Rated
                </div>
                <div
                  onClick={() => {
                    setSeachType("deliveryTime");
                    handleFilter("deliveryTime");
                  }}
                  class={`leading-12 ${
                    searchType === "deliveryTime"
                      ? "text-black border-b-2 border-solid border-black"
                      : "text-gray-500"
                  } hover: cursor-pointer`}
                >
                  Delivery Time
                </div>
                <div
                  onClick={() => {
                    setSeachType("low_high_costForTwo");
                    handleFilter("low_high_costForTwo");
                  }}
                  class={`leading-12 ${
                    searchType === "low_high_costForTwo"
                      ? "text-black border-b-2 border-solid border-black"
                      : "text-gray-500"
                  } hover: cursor-pointer`}
                >
                  Cost: Low To High
                </div>
                <div
                  onClick={() => {
                    setSeachType("high_low_costForTwo");
                    handleFilter("high_low_costForTwo");
                  }}
                  class={`leading-12 ${
                    searchType === "high_low_costForTwo"
                      ? "text-black border-b-2 border-solid border-black"
                      : "text-gray-500"
                  } hover: cursor-pointer`}
                >
                  Cost: High To Low
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div class="flex flex-wrap justify-evenly items-start gap-3 px-5 pt-5">
            {restaurantData.map((val) => {
              return <RestaurantCard key={val.info.id} cardData={val.info} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};
