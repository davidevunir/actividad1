import { BooksList } from "../components/BooksList.jsx";
import { useCart } from "../components/CartContext.jsx";
import { useFetchBooksMutation } from "../service/api/books.js";
import { useEffect, useState } from "react";

export const Home = () => {
  const [books, setBooks] = useState([]);
  const [useBooks] = useFetchBooksMutation();
  const { search } = useCart();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await useBooks(search).unwrap();
        setBooks(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [search]);

  return (
    <main className="flex-grow pt-12 relative">
      <BooksList books={books} />
    </main>
  );
};
