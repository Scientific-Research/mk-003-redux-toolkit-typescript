import { useDispatch } from "react-redux";
import { add, subtract } from "../../features/cart/cartSlice";

export const PageBooks = () => {
  const dispatch = useDispatch();

  return (
    <>
      <p>Welcome to the Books page.</p>
    </>
  );
};
