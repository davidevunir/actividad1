import {useCart} from "./CartContext.jsx";
import {Card} from "./Card.jsx";

export const BooksList = () => {
  const {isOpen, filteredBooks} = useCart();

  return (
      <div className={`container mx-auto px-4 py-8 transition-all duration-200 ease-in-out ${isOpen ? 'pr-96' : 'px-4'}`}>
        <div className="flex justify-center">
          <div className={`grid gap-6 transition-all duration-300 ease-in-out grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${isOpen ? 'xl:grid-cols-3' : 'xl:grid-cols-4'}`}>
            {filteredBooks.map((book) => (
                <Card key={book.id}
                      id={book.id}
                      title={book.title}
                      author={book.author}
                      price={book.price}
                      imageUrl={book.imageUrl}/>
            ))}
          </div>
        </div>
      </div>
  );
}
