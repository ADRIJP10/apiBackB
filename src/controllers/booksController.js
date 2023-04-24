import Book from "../models/booksModel";

export const obtenerBooks = async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
};

export const obtenerBookPorId = async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  res.json(book);
};

export const crearBook = async (req, res) => {
  await Book.create(req.body);
  res.json({ message: "Book creado" });
};

export const actualizarBookPorId = async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  await book.update(req.body);
  res.json({ message: "Book actualizado" });
};

export const eliminarBookPorId = async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  await book.destroy();
  res.json({ message: "Book eliminado" });
};
