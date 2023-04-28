import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { NavLink } from "react-router-dom";

export const PageCart = () => {
  const selectCart = (state: RootState) => state.cart;
  const { cartItems } = useSelector(selectCart);

  return (
    <div className="pageCart">
      {/* <p>Welcome to the Cart page.</p> */}
      <p className="message">
        <NavLink to="/books">Back to the Books Page</NavLink>
      </p>
      <div className="cartItems">
        {cartItems.map((cartItem) => {
          return (
            <div className="cartItem">
              <img src={`images/${cartItem.book.idCode}.jpg`} alt="" />
              <div className="title">{cartItem.book.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
