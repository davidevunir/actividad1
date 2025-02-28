import { BooksList } from "../components/BooksList.jsx";
import { useEffect, useState } from "react";
import { useFetchBooksMutation } from "../service/api/books.js";

export const Home = () => {
  const [books, setBooks] = useState([]);
  const [useBooks] = useFetchBooksMutation();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await useBooks().unwrap();
        setBooks(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <main className="flex-grow pt-12 relative">
      <BooksList books={books} />
    </main>
  );
};
