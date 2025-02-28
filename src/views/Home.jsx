import { BooksList } from "../components/BooksList.jsx";
import { useCart } from "../components/CartContext.jsx";
import { useFetchBooksQuery } from "../service/api/books.js";

export const Home = () => {
  const { search } = useCart();
  const { data: books, isLoading, isError } = useFetchBooksQuery(search);

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error al cargar libros</p>;

  return (
    <main className="flex-grow pt-12 relative">
      <BooksList books={books} />
    </main>
  );
};
