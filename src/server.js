const express = require('express'); //inyectamos express
const mongoose = require('mongoose'); //inyectamos mongoose
const personsRoutes = require('./routes/person'); //inyectamos persons routes
require('dotenv').config(); //inyectamos la variable de ambiente para MONGODB_URI

mongoose.Promise = global.Promise;
const app = express(); //iniciamos aplicación de express
const port = process.env.PORT || 3000; //configuramos puerto de escucha



app.set('view engine', 'ejs'); //establecemos el valor para el motor de vistas
app.use(express.urlencoded({extended:false}));
app.use(personsRoutes); //utilizamos el router de personas

mongoose.connect(process.env.MONGODB_URI) //conectamos base de datos
.then(()=>console.log(`Conectado a TEST`))
.catch((error)=>console.error(error));

app.listen(port,()=>console.log(`Escuchando en el puerto ${port}`));