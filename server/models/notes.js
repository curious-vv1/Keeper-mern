import mongoose from "mongoose";



const noteSchema = mongoose.Schema({
    title:String,
    content:String
});


const noteData = mongoose.model('note',noteSchema);


export default noteData;