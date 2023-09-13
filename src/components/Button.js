// import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const Button = () => {
  // const dispatch = useDispatch();

  const handleAddItem = () => {
    // Dispatch an action
    // dispatch(addItem("pizza"));
  };
  return (
    <div className="flex justify-between items-center ">
      <button className="text-green-900 -ml-2 w-6/12 text-4xl  ">-</button>
      <button
        className="w-6/12 -mr-2 text-green-900 text-3xl ml-5"
        onClick={handleAddItem}
      >
        +
      </button>
    </div>
  );
};

export default Button;
