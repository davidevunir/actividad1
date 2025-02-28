import { BooksList } from "../components/BooksList.jsx";
import {useCart} from "../components/CartContext.jsx";

export const Home = () => {
  const { books } = useCart();

  return (
    <main className="flex-grow pt-12 relative">
      <BooksList books={books} />
    </main>
  );
};
