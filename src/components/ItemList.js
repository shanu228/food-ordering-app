import { CLOUDINARY_IMAGE } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { addItem } from "../redux/cartSlice";

const ItemList = ({ items }) => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>

          <div className="w-3/12  relative">
            <img src={CLOUDINARY_IMAGE + item?.card?.info?.imageId} alt="" />
            <div className="flex items-center justify-between px-6 h-10  rounded-lg bg-white shadow-lg absolute mx-[22%] -mt-8 flex items-center ">
              {/* <div>
                {cartItems.length === 0 ? (
                  <div className="ml-4">
                    <button
                      className="text-lg text-center text-green-700 font-bold"
                      onClick={handleAddItem}
                    >
                      Add
                    </button>
                  </div>
                ) : (
                  <Button />
                )}
              </div> */}

              <button
                className="text-lg text-center text-green-700 font-bold"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
