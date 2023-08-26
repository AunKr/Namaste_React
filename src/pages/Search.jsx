import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import {
  PRI_SEARCH_API,
  SEARCH_ALL_API_URL,
  SEARCH_IMG_URL,
  SEARCH_RESULT_URL,
} from "../utils/constants";
import { SearchIcon } from "../assets/images";

export default Search = () => {
  const [priData, setPriData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(PRI_SEARCH_API);
    const json = await data.json();
    const restData = json.data.cards.filter(
      (val) =>
        val?.card?.card?.gridElements?.infoWithStyle?.info &&
        val.card?.card?.id === "PopularCuisinessearchpage"
    );
    const finalData =
      restData[0].card?.card?.gridElements?.infoWithStyle?.info.filter(
        (val) => val.id !== "600884"
      );
    console.log("restData 1111", finalData);
    setPriData(finalData);
  };

  const fetchSearch = async (e) => {
    console.log("e", e.target.value);
    const value = e.target.value;
    const data = await fetch(
      `${SEARCH_ALL_API_URL}&str=${value}&trackingId=undefined`
    );
    const json = await data.json();
    const restData = json?.data?.suggestions;
    console.log("restData", restData);
    setSearchData(restData);
  };

  const debouncetSearch = (func, e) => {
    let timer;
    return function (...args) {
      let context = this;
      console.log("this", this);
      console.log("args", args);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, 500);
    };
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <div className="pt-20 w-2/4">
          <div className="relative">
            <input
              class=" placeholder:text-slate-600 placeholder:font-medium block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for restaurants and food"
              type="text"
              name="search"
              onChange={debouncetSearch(fetchSearch)}
            />
            <div className="absolute top-2.5 right-5">
              <SearchIcon />
            </div>
          </div>

          <div class="flex ">
            {priData?.length > 0 &&
              priData.map((val) => (
                <button>
                  <img
                    src={`${SEARCH_IMG_URL}/${val.imageId}`}
                    alt={val.imageId}
                  />
                </button>
              ))}
          </div>
          <div className="bg-white text-black h-full w-full pt-4">
            {searchData?.length > 0 &&
              searchData.map((val) => (
                <button className="flex ml-4 py-3.5 pr-4 pl-0 items-center w-full hover:bg-slate-100 hover:text-black">
                  <div className="flex items-center justify-center w-16 h-16">
                    <img
                      className="rounded"
                      src={`${SEARCH_RESULT_URL}/${val.cloudinaryId}`}
                      alt={val.cloudinaryId}
                    />
                  </div>
                  <div className="flex flex-col ml-3.5 items-start">
                    <div>{val.text}</div>
                    <div>{val.tagToDisplay}</div>
                  </div>
                </button>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
