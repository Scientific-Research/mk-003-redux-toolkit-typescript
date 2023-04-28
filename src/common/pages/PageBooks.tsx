import { useDispatch, useSelector } from "react-redux";
// import { add, subtract } from "../../features/cart/cartSlice";
import { addCartItem } from "../../features/cart/cartSlice";
import { RootState } from "../../app/store";

export const PageBooks = () => {
  const dispatch = useDispatch();

  const selectCart = (state: RootState) => state.cart;
  // const { count } = useSelector(selectCart);
  const { books, cartItems } = useSelector(selectCart);

  return (
    <div className="pageBooks">
      {/* <p>Welcome to the Books page.</p> */}
      {/* <button onClick={() => dispatch(subtract())}>Subtract One</button>
      <button onClick={() => dispatch(add())}>Add One</button>
      <hr />
      <span>Count: {count}</span> */}

      {books.map(book =>{
        return(
          <div className="book">
            nnn
          </div>
        )
      })}
    </div>
  );
};
