import express from 'express'
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
// import {Book} from './models/bookModel.js'
import booksRoute from './routes/booksRoutes.js'
import cors from 'cors';



const app = express();  

//middleware for parsing request body
 app.use(express.json());

// middleware for handling CORS policy
// option1: allow all origins with default of cors(*)
  app.use(cors());
  //  app.use(
  //   cors({
  //     origin: 'http://localhost:3000',
  //     methods: ['GET', 'POST', 'PUT', 'DELETE'],
  //     allowedHeaders: ['Content-Type'],
  //   })
  //  );


  app.get('/' , (req, res) =>{
    console.log('Hello from the server');
    console.log(req);
     return res.status(234).send('<h1>Hello from the server</h1>'); // get request
  })

 app.use('/books', booksRoute);


 

mongoose.connect(mongoDBURL).then(() =>{
  console.log('App connected to database');
  app.listen(PORT, ()=>{
    console.log(`App is listening to port: ${PORT}`)
  })
})
.catch((err) =>{
   console.log('Error connecting to database', err);
})


