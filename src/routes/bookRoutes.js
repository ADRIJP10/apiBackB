import { Router } from "express";
import * as booksController from '../controllers/booksController'

const router = Router();

router.get('/', booksController.obtenerBooks )

router.get('/:id', booksController.obtenerBookPorId )

router.post('/', booksController.crearBook )

router.put('/:id', booksController.actualizarBookPorId )

router.delete('/:id', booksController.eliminarBookPorId )

export default router;

