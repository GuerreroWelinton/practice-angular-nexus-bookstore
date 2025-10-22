import { Book } from '../interfaces/book-interface';

export const BOOKS: Book[] = [
  {
    id: 1,
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    price: 18.5,
    discountPercentage: 20,
    category: 'Literatura',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/P/8437604885.01.L.jpg',
    year: 1967,
    description:
      'La historia épica de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo. Una obra maestra del realismo mágico que narra el auge y la caída de una estirpe marcada por la soledad y el destino.',
  },
  {
    id: 2,
    title: 'Don Quijote de la Mancha',
    author: 'Miguel de Cervantes',
    price: 22.95,
    category: 'Clásicos',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/P/8491050493.01.L.jpg',
    year: 1605,
    description:
      'Las aventuras del ingenioso hidalgo que, enloquecido por la lectura de libros de caballerías, sale a recorrer España en busca de aventuras junto a su fiel escudero Sancho Panza. Considerada la primera novela moderna de la literatura universal.',
  },
  {
    id: 3,
    title: 'La Casa de los Espíritus',
    author: 'Isabel Allende',
    price: 16.75,
    category: 'Literatura',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/P/8497592441.01.L.jpg',
    year: 1982,
    description:
      'La saga de la familia Trueba a través de cuatro generaciones y la historia de un país sudamericano. Una mezcla de realismo mágico y crítica social que sigue las vidas de mujeres fuertes marcadas por el amor, la pasión y la política.',
  },
  {
    id: 4,
    title: 'Rayuela',
    author: 'Julio Cortázar',
    price: 19.99,
    category: 'Literatura',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/P/8437604737.01.L.jpg',
    year: 1963,
    description:
      'Una novela experimental que puede leerse de múltiples formas. Narra la historia de Horacio Oliveira y su búsqueda existencial entre París y Buenos Aires. Una obra revolucionaria que desafía las convenciones narrativas tradicionales.',
  },
  {
    id: 5,
    title: 'El Aleph',
    author: 'Jorge Luis Borges',
    price: 15.25,
    category: 'Cuentos',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/P/8420633801.01.L.jpg',
    year: 1949,
    description:
      'Una colección de cuentos metafísicos que exploran temas como el infinito, el tiempo, los laberintos y la realidad. Incluye relatos memorables como "El Aleph", "La casa de Asterión" y "El Zahir", obras maestras de la literatura fantástica.',
  },
  {
    id: 6,
    title: 'Pedro Páramo',
    author: 'Juan Rulfo',
    price: 14.5,
    category: 'Literatura',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/P/8437604729.01.L.jpg',
    year: 1955,
    description:
      'Juan Preciado viaja a Comala para buscar a su padre, Pedro Páramo, y descubre un pueblo habitado por murmullos y fantasmas. Una obra breve pero intensa que revolucionó la narrativa latinoamericana con su estructura fragmentada y atmosférica.',
  },
  {
    id: 7,
    title: 'Como agua para chocolate',
    author: 'Laura Esquivel',
    price: 17.8,
    category: 'Romance',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/P/8497592468.01.L.jpg',
    year: 1989,
    description:
      'La historia de Tita, quien nace en la cocina y está destinada a no casarse para cuidar a su madre. A través de recetas mensuales, se narra su amor prohibido por Pedro y cómo sus emociones se transmiten mágicamente a través de la comida.',
  },
  {
    id: 8,
    title: 'La fiesta del chivo',
    author: 'Mario Vargas Llosa',
    price: 21.25,
    category: 'Novela Histórica',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/P/8420467251.01.L.jpg',
    year: 2000,
    description:
      'Una novela sobre la dictadura de Rafael Leónidas Trujillo en República Dominicana. Vargas Llosa recrea los últimos días del tirano y el impacto de su régimen brutal en la sociedad dominicana a través de múltiples voces narrativas.',
  },
  {
    id: 9,
    title: 'La sombra del viento',
    author: 'Carlos Ruiz Zafón',
    price: 19.5,
    discountPercentage: 15,
    category: 'Misterio',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/P/8408163434.01.L.jpg',
    year: 2001,
    description:
      'En la Barcelona de posguerra, Daniel Sempere descubre un libro misterioso en el Cementerio de los Libros Olvidados que cambiará su vida. Una historia de amor, misterio y traición que explora el poder de los libros y las palabras.',
  },
  {
    id: 10,
    title: 'El amor en los tiempos del cólera',
    author: 'Gabriel García Márquez',
    price: 20.0,
    category: 'Romance',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/P/8497592441.01.L.jpg',
    year: 1985,
    description:
      'La historia de amor de Florentino Ariza y Fermina Daza que atraviesa más de cincuenta años. Una épica romántica que demuestra que el amor verdadero puede resistir el paso del tiempo, las adversidades y hasta la vejez.',
  },
  {
    id: 11,
    title: 'Crónica de una muerte anunciada',
    author: 'Gabriel García Márquez',
    price: 15.5,
    discountPercentage: 10,
    category: 'Novela',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/P/8497592190.01.L.jpg',
    year: 1981,
    description:
      'La reconstrucción periodística de un crimen de honor en un pueblo del Caribe colombiano. Todos sabían que iban a matar a Santiago Nasar, pero nadie hizo nada para impedirlo. Una obra maestra sobre el destino inexorable.',
  },
  {
    id: 12,
    title: 'El túnel',
    author: 'Ernesto Sábato',
    price: 14.0,
    category: 'Novela Psicológica',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/P/8432217077.01.L.jpg',
    year: 1948,
    description:
      'Juan Pablo Castel, un pintor obsesivo, relata desde la cárcel cómo y por qué asesinó a María Iribarne, la única persona que parecía comprender su arte. Una exploración intensa de la soledad, los celos y la incomunicación humana.',
  },
];
