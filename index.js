// inicar la app
const server = require("./src/server");
const port = 8080;
const db = require("./src/lib/db");

//abrir la concecion a la base de datos o crear la base 
db.initialize();

// poner el servidor a escuchar 
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}); 






