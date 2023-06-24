import express from 'express';
import { getNote,createNote,deleteNote } from '../controllers/notes.js';




const router = express.Router();


router.get('/',getNote);
router.post('/',createNote);
router.delete('/:id',deleteNote);



export default router;