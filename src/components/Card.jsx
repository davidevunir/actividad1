import {useNavigate} from 'react-router-dom';
import {useCart} from './CartContext';

export const Card = ({id, title, author, price, imageUrl}) => {
  const {addToCart} = useCart();
  const navigate = useNavigate();

  return (
      <div className="max-w-sm rounded-xl bg-neutral-200 p-4 transition-all">
        <div className="mb-2 h-60 flex items-center justify-center">
          <img className="h-full object-cover rounded-lg shadow-2xl" src={imageUrl} alt={title}/>
        </div>

        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-700">{author}</p>
          <p className="text-2xl font-bold text-gray-700">${price}</p>

          <div className="pt-2 space-y-3">
            <button className="w-full py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700"
                    onClick={() => addToCart({id, title, author, price, imageUrl})}>
              Agregar al carrito
            </button>
            <button className="w-full py-2 border-2 border-neutral-400 text-neutral-600 font-semibold rounded-lg hover:bg-blue-300 hover:text-white"
                    onClick={() => navigate(`/detail/${id}`)}>
              Detalles
            </button>
          </div>
        </div>
      </div>
  );
}
