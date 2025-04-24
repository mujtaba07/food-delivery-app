import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  // Access the cart items from the Redux store
  const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    // Function to handle clearing the cart
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

 return(
    <div>
        <h1 className="text-3xl font-bold text-center my-10">
            Cart
        </h1>
        <div className="flex max-w-[800px] my-5 mx-auto flex-col items-center justify-center">
            {cartItems.length === 0 && (
                <h1 className="text-2xl font-bold text-center my-10">
                    Your Cart is Empty
                </h1>
            )}

            {cartItems.length > 0 && <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>}
            <ItemsList item={cartItems} addBtn={false} />
        </div>
    </div>
 )
};

export default Cart;