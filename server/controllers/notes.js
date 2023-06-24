import noteData from "../models/notes.js";


export const getNote = async (req,res) => {
    try {
        const allNotes =await noteData.find();

        res.status(200).json(allNotes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createNote = async (req,res) => {
    const note = req.body;

    const newNote = noteData(note);

    try {
        await newNote.save();

        res.status(201).json(newNote);
    } catch (error) {
        
    }
}


export const deleteNote = async (req,res) =>{
    const id=req.params.id;

    try {
        await noteData.findByIdAndRemove(id).exec();
        res.send("succesfully deleted");
    } catch (error) {
        console.log(error);
    }
}