import { useDispatch, useSelector } from "react-redux";
// import { add, subtract } from "../../features/cart/cartSlice";
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
      <div className="books">
        {books.map((book) => {
          return (
            <div
              className="book"
              onClick={() =>
                dispatch({ type: "cart/addCartItem", payload: { book } })
              }
              key={book.id}
            >
              {/* {book.title} */}
              <img src={`images/${book.idCode}.jpg`} alt="" />
            </div>
          );
        })}
      </div>
      <p className="message">You have {cartItems.length} items in your cart.</p>
    </div>
  );
};
