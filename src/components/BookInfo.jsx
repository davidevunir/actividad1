import { ShoppingCart, Star } from "lucide-react";

export const BookInfo = ({ book, addToCart }) => (
  <div className="grid md:grid-cols-2">
    <div className="flex justify-center md:justify-start">
      <img
        className="w-72 h-auto object-cover rounded-lg shadow-lg"
        src={book.image_url}
        alt={book.title}
      />
    </div>
    <div className="space-y-4">
      <div>
        <h1 className="text-white text-3xl font-bold mb-2">{book.title}</h1>
        <p className="text-xl text-gray-300 mb-2">por {book.author}</p>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                className={
                  i < book.rating
                    ? "fill-yellow-400 text-neutral-800"
                    : "text-gray-300"
                }
                key={i}
                size={20}
              />
            ))}
          </div>
          {
            //<span className="text-gray-200">({book.reviews.length} reseñas)</span
          }
        </div>
      </div>

      <div>
        <p className="text-white text-3xl font-bold mb-4">${book.price}</p>
        {/* <p className="text-gray-200 mb-8">{book.synopsis}</p> */}
        <div className="space-y-2">
          <button
            className="w-full py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 flex items-center justify-center shadow-2xl"
            onClick={() => addToCart(book)}
          >
            <ShoppingCart className="mr-4" size={20} />
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  </div>
);
