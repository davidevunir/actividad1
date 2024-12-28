import {useCart} from './CartContext';

export const NavLink = ({icon, text, isCart = false}) => {
  const {toggleCart, cartItems} = useCart();

  return (
      <a className="relative flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-600 cursor-pointer"
         onClick={(event) => {
           event.preventDefault();
           if (isCart) {
             toggleCart();
           }
         }}>
        {icon}
        {text && <span className="text-sm">{text}</span>}
        {isCart && cartItems.length > 0 &&
            (<span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.length}
            </span>)
        }
      </a>
  );
}
