import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({  // schema of book 
      title:{
        type: String,
        required: true
      },
       
      author:{
        type:String,
        required: true
      },

      publishYear:{
         type: Number,
         required: true
      },
    },
    {
        timestamps: true // track the timing for  updating and creating the model
     }
)

export const Book = mongoose.model("Book", bookSchema);