import {Trash2, X} from 'lucide-react';
import {useCart} from './CartContext';
import {useNavigate} from "react-router-dom";

export const CartSidebar = () => {
  const {isOpen, cartItems, removeFromCart, total, toggleCart} = useCart();
  const navigate = useNavigate();

  const handleBuyClick = () => {
    toggleCart();
    navigate(`/checkout`)
  }

  return (
      <div className={`fixed top-20 right-0 w-96 bg-gray-100 rounded transition z-50 ${isOpen ? 
          'translate-x-0' : 
          'translate-x-full'} max-h-[calc(100vh-5rem)] flex flex-col`}>
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Carrito de Compras</h2>
            <button className="p-2 hover:bg-gray-200 rounded-full" onClick={toggleCart}>
              <X size={20}/>
            </button>
          </div>
        </div>

        <div className="overflow-y-auto">
          <div className="p-4">
            {cartItems.length === 0 ?
                (<p className="text-gray-500 text-center">El carrito está vacío</p>) :
                (<div className="space-y-4">
                      {cartItems.map((item) => (
                          <div className="flex gap-4 p-4 bg-gray-50 rounded-lg" key={item.id}>
                            <img className="w-20 h-20 object-cover rounded" src={item.image_url} alt={item.title}/>
                            <div className="flex-grow">
                              <div className="flex justify-between">
                                <h3 className="font-semibold">{item.title}</h3>
                              </div>
                              <p className="text-sm text-gray-600">{item.author}</p>
                              <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <div className={`flex flex-col ${item.quantity > 1 ? 'justify-between' : 'justify-center'} h-20`}>
                              {item.quantity > 1 && (<span className="text-sm font-semibold bg-gray-200 px-1 py-1 rounded">x{item.quantity}</span>)}
                              <button className="text-red-500 hover:text-red-700" onClick={() => removeFromCart(item.id)}>
                                <Trash2 size={25}/>
                              </button>
                            </div>
                          </div>
                      ))}
                </div>)}
          </div>
        </div>

        <div className="shrink-0 p-4 border-t bg-gray-100">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-xl font-bold">${total.toFixed(2)}</span>
          </div>
          <button className="w-full py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700"
                  onClick={() => handleBuyClick()}>
            Comprar
          </button>
        </div>
      </div>
  );
}
