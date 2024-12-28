export const BookSpecs = ({book}) => (
    <div className="mt-8 shadow-2xl">
      <h2 className="text-white text-2xl font-bold mb-4">Especificaciones</h2>
      <div className="grid md:grid-cols-2 gap-4 p-6 rounded-lg bg-neutral-200">
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Editorial:</span> {book.publisher}
          </p>
          <p>
            <span className="font-semibold">Año de publicación:</span> {book.publishYear}
          </p>
          <p>
            <span className="font-semibold">Idioma:</span> {book.language}
          </p>
          <p>
            <span className="font-semibold">Páginas:</span> {book.pages}
          </p>
          <p>
            <span className="font-semibold">ISBN:</span> {book.isbn}
          </p>
        </div>
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Categorías:</span> {book.categories.join(', ')}
          </p>
          <p>
            <span className="font-semibold">Stock disponible:</span> {book.stock} unidades
          </p>
        </div>
      </div>
    </div>
);