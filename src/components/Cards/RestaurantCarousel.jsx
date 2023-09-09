import { Button } from "@mui/material";
import { CAROUSEL_IMG_URL } from "../../utils/constants";

const RestaurantCarousel = ({ carouselDetails }) => {
  return (
    <div className="">
      <div className="relative flex justify-center items-center">
        <div className="max-w-xs">
          {
            <img
              src={`${CAROUSEL_IMG_URL}/${carouselDetails.creativeId}`}
              alt={`carousel-${carouselDetails.creativeId}`}
            />
          }
        </div>
        <div className="max-w-xs flex justify-between items-center absolute w-full text-white bottom-5 px-2.5">
          <span>₹{carouselDetails?.dish?.info?.price / 100}</span>
          <div>
            <Button className="success-btn" color="success" variant="outlined">
              ADD
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCarousel;
