import cienAniosDeSoledad from '../assets/images/books/cien_anios_de_soledad.webp';
import crimenYCastigo from '../assets/images/books/crimen_y_castigo.webp';
import laCulpaEsDeLaVaca from '../assets/images/books/la_culpa_es_de_la_vaca.webp';
import donQuijote from '../assets/images/books/don_quijote.jpg';
import laVenganza from '../assets/images/books/la_venganza_de_la_tierra.jpeg';
import pensarBien from '../assets/images/books/pensar_bien_sentirse_bien.webp';
import laHistoriaDelRock from '../assets/images/books/la_historia_del_rock.jpg';
import learnSpringboot from '../assets/images/books/learn_springboot.jpg';

export const books = [
  {
    id: 1,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    price: 24.99,
    imageUrl: cienAniosDeSoledad,
    description: "Una saga familiar que narra la historia de los Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo.",
    publishYear: 1967,
    publisher: "Editorial Sudamericana",
    language: "Español",
    pages: 471,
    isbn: "978-0307474728",
    categories: ["Realismo mágico", "Ficción literaria", "Novela"],
    rating: 5,
    reviews: [
      {
        id: 1,
        userName: "María López",
        rating: 5,
        comment: "Una obra maestra de la literatura latinoamericana.",
        date: "2024-01-15"
      },
      {
        id: 2,
        userName: "Juan Pérez",
        rating: 4,
        comment: "Fascinante narrativa que te atrapa desde el primer capítulo.",
        date: "2024-01-10"
      }
    ],
    stock: 15,
  },
  {
    id: 2,
    title: "Crimen y Castigo",
    author: "Fiodor Dostoyevski",
    price: 29.99,
    imageUrl: crimenYCastigo,
    description: "Una novela que explora la psicología de un joven estudiante que comete un asesinato y las consecuencias morales de sus acciones.",
    publishYear: 1866,
    publisher: "El Mensajero Ruso",
    language: "Español",
    pages: 671,
    isbn: "978-0143058142",
    categories: ["Ficción literaria", "Novela psicológica", "Literatura rusa"],
    rating: 5,
    reviews: [
      {
        id: 1,
        userName: "Carlos Ruiz",
        rating: 5,
        comment: "Una obra maestra de la literatura universal que te hace reflexionar.",
        date: "2024-02-01"
      },
      {
        id: 2,
        userName: "Ana García",
        rating: 4,
        comment: "Profundo análisis psicológico de los personajes.",
        date: "2024-01-25"
      }
    ],
    stock: 10,
  },
  {
    id: 3,
    title: "La culpa es de la vaca",
    author: "Anónimo",
    price: 14.99,
    imageUrl: laCulpaEsDeLaVaca,
    description: "Una colección de anécdotas y fábulas motivacionales que buscan inspirar y enseñar lecciones de vida.",
    publishYear: 2002,
    publisher: "Editorial Planeta",
    language: "Español",
    pages: 196,
    isbn: "978-9584204141",
    categories: ["Autoayuda", "Motivacional", "Fábulas"],
    rating: 4,
    reviews: [
      {
        id: 1,
        userName: "Pedro Sánchez",
        rating: 4,
        comment: "Historias cortas pero con grandes enseñanzas.",
        date: "2024-01-20"
      },
      {
        id: 2,
        userName: "Laura Martínez",
        rating: 5,
        comment: "Excelente libro para reflexionar sobre nuestras acciones.",
        date: "2024-01-18"
      }
    ],
    stock: 25,
  },
  {
    id: 4,
    title: "La historia del Rock",
    author: "Mark Paytress",
    price: 39.99,
    imageUrl: laHistoriaDelRock,
    description: "Un recorrido completo por la historia del rock, desde sus orígenes hasta la actualidad, incluyendo los artistas y álbumes más influyentes.",
    publishYear: 2012,
    publisher: "Blume",
    language: "Español",
    pages: 512,
    isbn: "978-8480768597",
    categories: ["Música", "Historia", "Cultura popular"],
    rating: 4,
    reviews: [
      {
        id: 1,
        userName: "Roberto Díaz",
        rating: 5,
        comment: "Documentación exhaustiva sobre la historia del rock.",
        date: "2024-02-05"
      },
      {
        id: 2,
        userName: "Carmen Vega",
        rating: 4,
        comment: "Excelentes fotografías y contenido muy completo.",
        date: "2024-01-30"
      }
    ],
    stock: 8,
  },
  {
    id: 5,
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    price: 29.99,
    imageUrl: donQuijote,
    description: "La obra cumbre de la literatura española que narra las aventuras del ingenioso hidalgo Don Quijote y su escudero Sancho Panza.",
    publishYear: 1605,
    publisher: "Real Academia Española",
    language: "Español",
    pages: 863,
    isbn: "978-8424938437",
    categories: ["Clásicos", "Novela", "Literatura española"],
    rating: 4,
    reviews: [
      {
        id: 1,
        userName: "Miguel Ángel",
        rating: 5,
        comment: "El mejor libro de la literatura española.",
        date: "2024-01-28"
      },
      {
        id: 2,
        userName: "Isabel Torres",
        rating: 5,
        comment: "Una obra maestra que no pasa de moda.",
        date: "2024-01-22"
      }
    ],
    stock: 20,
  },
  {
    id: 6,
    title: "La venganza de la Tierra",
    author: "James Lovelock",
    price: 27.99,
    imageUrl: laVenganza,
    description: "Un análisis sobre el cambio climático y cómo la Tierra podría responder a las acciones humanas que la están afectando.",
    publishYear: 2006,
    publisher: "Planeta",
    language: "Español",
    pages: 249,
    isbn: "978-8408068136",
    categories: ["Ciencia", "Medio ambiente", "Divulgación científica"],
    rating: 4,
    reviews: [
      {
        id: 1,
        userName: "Alejandro Ramos",
        rating: 4,
        comment: "Una perspectiva única sobre el cambio climático.",
        date: "2024-02-03"
      },
      {
        id: 2,
        userName: "Elena Morales",
        rating: 5,
        comment: "Lectura obligada para entender la crisis climática.",
        date: "2024-01-27"
      }
    ],
    stock: 12,
  },
  {
    id: 7,
    title: "Pensar bien, sentirse bien",
    author: "Walter Riso",
    price: 19.99,
    imageUrl: pensarBien,
    description: "Una guía práctica para desarrollar un pensamiento positivo y mejorar el bienestar emocional.",
    publishYear: 2012,
    publisher: "Planeta",
    language: "Español",
    pages: 232,
    isbn: "978-8408110742",
    categories: ["Autoayuda", "Psicología", "Desarrollo personal"],
    rating: 4,
    reviews: [
      {
        id: 1,
        userName: "Patricia Jiménez",
        rating: 4,
        comment: "Excelentes consejos para el bienestar mental.",
        date: "2024-02-02"
      },
      {
        id: 2,
        userName: "Diego Moreno",
        rating: 5,
        comment: "Me ayudó mucho a cambiar mi perspectiva.",
        date: "2024-01-20"
      }
    ],
    stock: 18,
  },
  {
    id: 8,
    title: "Aprende Springboot",
    author: "Greg L. Turnquist",
    price: 39.99,
    imageUrl: learnSpringboot,
    description: "Una guía completa para aprender a desarrollar aplicaciones web con Spring Boot, desde los conceptos básicos hasta temas avanzados.",
    publishYear: 2023,
    publisher: "Manning Publications",
    language: "Español",
    pages: 392,
    isbn: "978-1617298691",
    categories: ["Programación", "Desarrollo web", "Java"],
    rating: 5,
    reviews: [
      {
        id: 1,
        userName: "Luis Ramírez",
        rating: 5,
        comment: "Excelente recurso para aprender Spring Boot.",
        date: "2024-02-04"
      },
      {
        id: 2,
        userName: "Marina Castro",
        rating: 5,
        comment: "Muy bien explicado, con ejemplos prácticos.",
        date: "2024-01-29"
      },
      {
        id: 3,
        userName: "Pablo Montes",
        rating: 5,
        comment: "Me ha ayudado mucho a entender esta tecnología.",
        date: "2023-02-10"
      }
    ],
    stock: 15,
  }
];
