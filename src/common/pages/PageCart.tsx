import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const PageCart = () => {
  const selectCart = (state: RootState) => state.cart;
  const { cartItems } = useSelector(selectCart);

  return (
    <div className="pageCart">
      {/* <p>Welcome to the Cart page.</p> */}
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
