import UserContext from "../utils/UserContext";
import { CLOUDINARY_IMAGE } from "../utils/constants";
import { useContext } from "react";

const RestaurantCard = (props) => {
  const { resCard } = props;
  const { loggedInUser } = useContext(UserContext);

  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    sla: { slaString },
  } = resCard?.info;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 hover:scale-125"
    >
      <img
        className="rounded-lg"
        src={`${CLOUDINARY_IMAGE}${cloudinaryImageId}`}
        alt="dish"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="cuisines">{cuisines.join(", ")}.</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{slaString}</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label
          htmlFor=""
          className="absolute bg-slate-950 m-4 p-2 rounded-lg text-white "
        >
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
