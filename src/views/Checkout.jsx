import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import {ArrowLeft, CreditCard, Trash2} from 'lucide-react';
import {useCart} from "../components/CartContext.jsx";
import { useCreateOrderMutation } from "../service/api/orders.js";

export const Checkout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const {cartItems, total, removeFromCart, clearCart} = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [coupon, setCoupon] = useState('');
  const [createOrder, { isLoading, error }] = useCreateOrderMutation();

  useEffect(() => {
      const storedData = localStorage.getItem("clientData");
      if (storedData) {
        const client = JSON.parse(storedData);
        setUser(client);
        console.log("Datos del cliente recuperados:", storedData);
      } else {
        navigate("/"); 
        console.log("No se encontraron datos del cliente.");
      }
    }, []);

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert("El carrito está vacío.");
      return;
    }

    const orderData = {
      targetMethod: "POST",
      body: {
        idClient: user.id, // Cambia esto según el cliente real
        detail: cartItems.map((item) => ({
          idBook: item.id,
          quantity: item.quantity,
        })),
      },
    };

    try {
      const response = await createOrder(orderData).unwrap();
      console.log("Orden creada:", response);
      alert("¡Pedido completado con éxito!");
      clearCart();
      navigate("/home");
    } catch (err) {
      console.error("Error al procesar el pedido:", err);
      alert("Hubo un problema con tu pedido.");
    }
  };

  return (
      <main className="flex-grow pt-20 container mx-auto px-4 pb-8">
        <button className="w-40 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2 py-2 mb-6"
                onClick={() => navigate(-1)}>
          <ArrowLeft size={20}/> Regresar
        </button>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-white text-2xl font-bold mb-6">¡Gracias por preferirnos!</h1>
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-lg font-semibold mb-4">Libros seleccionados</h2>
            <div className="space-y-4">
            {cartItems.length > 0 ? (
  cartItems.map((item) => (
    <div className="flex justify-between items-center py-2 border-b" key={item.id}>
      <div>
        <p className="font-medium">{item.title}</p>
        <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="font-medium">${(item.price * item.quantity)}</p>
        <button className="text-red-500 hover:text-red-700"
                onClick={() => removeFromCart(item.id)}>
          <Trash2 size={20}/>
        </button>
      </div>
    </div>
  ))
) : (
  <p className="text-gray-500 text-center">No hay libros en el carrito.</p>
)}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-lg font-semibold mb-4">Método de Pago</h2>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="radio"
                       value="card"
                       checked={paymentMethod === 'card'}
                       onChange={(e) => setPaymentMethod(e.target.value)}
                       className="form-radio"/>
                <span>Tarjeta de Crédito/Débito</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="radio"
                       value="paypal"
                       checked={paymentMethod === 'paypal'}
                       onChange={(e) => setPaymentMethod(e.target.value)}
                       className="form-radio"/>
                <span>PayPal</span>
              </label>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cupón de descuento
              </label>
              <input type="text"
                     value={coupon}
                     onChange={(e) => setCoupon(e.target.value)}
                     className="w-full p-2 border rounded"
                     placeholder="Ingresa tu cupón"/>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <button 
      className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 
        ${cartItems.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700 text-white'}`}
      onClick={handleCheckout}
      disabled={cartItems.length === 0 || isLoading}
    >
      {isLoading ? "Procesando..." : "Completar el pago"}
    </button>
        </div>
      </main>
  );
}
