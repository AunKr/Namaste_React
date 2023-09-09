import { Discount as DiscountIcon } from "@mui/icons-material";

const OfferCard = ({ offerDetails }) => {
  return (
    <div
      className={`flex ${
        offerDetails?.offerTag ? "justify-start" : "justify-center"
      } border rounded-md shadow-xl p-2 min-width-offer`}
    >
      {offerDetails?.offerTag && (
        <p className="text-xs text-red-700 font-semibold writing-vertical pl-1 text-center divide-x-2 border-l-2 mr-2 border-r-0 rotate-180">
          {offerDetails?.offerTag}
        </p>
      )}
      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-center gap-2">
          <div>
            <DiscountIcon className="text-sm" />
          </div>
          <div className="text-base font-semibold">{offerDetails.header}</div>
        </div>
        <div className="flex justify-center items-center text-sm text-slate-500 mt-1 font-bold gap-1">
          <div>{offerDetails.couponCode}</div>|
          <div>{offerDetails.description}</div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
