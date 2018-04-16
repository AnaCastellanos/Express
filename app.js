//Levanta un servidor con express utilizando rutas en el puerto 3000


const express = require('express');
const app = express(); 

app.use(express.static('public'));  //Express utiliza los recursos estaticos de public

// app.get('/', (req, res) => { //Utiliza express para manejar las rutas
// 	res.end('Works');//Respuesta end: Muestra en pantalla 'works'
// });

app.listen(3000, () => {
	console.log('Servidor iniciado en el puerto 3000');
});