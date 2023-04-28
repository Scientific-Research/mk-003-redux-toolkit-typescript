import { useDispatch } from "react-redux";
import { add, subtract } from "../../features/cart/cartSlice";

export const PageBooks = () => {
  const dispatch = useDispatch();

  return (
    <div className="pageBooks">
      {/* <p>Welcome to the Books page.</p> */}
      <button onClick={() => dispatch(subtract())}>Subtract One</button>
      <button onClick={() => dispatch(add())}>Add One</button>
    </div>
  );
};
