import {books} from "../data/booksData.js";
import {BooksList} from "../components/BooksList.jsx";

export const Home = () => {
  return (
      <main className="flex-grow pt-12 relative">
        <BooksList books={books}/>
      </main>
  );
}
