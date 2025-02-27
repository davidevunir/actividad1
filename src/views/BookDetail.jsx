import {books} from "../data/booksData.js";
import {useNavigate, useParams} from "react-router-dom";
import {useCart} from "../components/CartContext.jsx";
import {ArrowLeft} from "lucide-react";
import {BookInfo} from "../components/BookInfo.jsx";
import {BookSpecs} from "../components/BookSpecs.jsx";
import {BookReviews} from "../components/BookReviews.jsx";
import { useFetchBooksByIdQuery } from "../service/api/books.js";
import {useEffect, useState} from "react";

export const BookDetail = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const {addToCart} = useCart();
  //const book = books.find(book => String(book.id) === String(1));
  //console.log('Aqui',book);

  const { data: book, error, isLoading } = useFetchBooksByIdQuery({ id });
console.log('AQUiii',book);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar el libro</p>;
  

  const NotFoundView = () => (
      <main className="flex-grow min-h-screen pt-24 container mx-auto px-4">
        <div className="bg-neutral-600 rounded-lg p-8 max-w-lg mx-auto shadow-xl">
          <div className="text-center">
            <h1 className="text-white text-3xl font-bold mb-4">Libro no encontrado</h1>
            <p className="text-gray-300 text-lg mb-6">
              Lo sentimos, no se ha encontrado el libro solicitado.
            </p>
            <button className="flex mx-auto w-40 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 items-center justify-center py-3 shadow-2xl"
                    onClick={() => navigate(-1)}>
              <ArrowLeft size={20} className="mr-2"/> Regresar
            </button>
          </div>
        </div>
      </main>
  );

  const DetailView = () => (
      <main className="flex-grow min-h-screen pt-20 container mx-auto px-4 pb-8 max-w-6xl">
        <div className="bg-neutral-600 rounded-lg p-6 shadow-2xl">
          <button className="w-40 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2 py-3 shadow-2xl mb-8"
                  onClick={() => navigate(-1)}>
            <ArrowLeft size={20}/> Regresar
          </button>

          <div className="space-y-8">
            <BookInfo book={book} addToCart={addToCart}/>
            <BookSpecs book={book}/>
            {//<BookReviews reviews={book.reviews}/>
}
          </div>
        </div>
      </main>
  );

  return book ? <DetailView/> : <NotFoundView/>;
}
