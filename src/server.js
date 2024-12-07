/* descripcion del servidor 
  que middelewares va a ocupar 
  rutas que usara el server*/
const loggerMiddleware = require("./middlewares/logger");
const express = require("express")

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

 
app.get("/", (req, res) => {
    res.json({ message: "Koders APIv1",
        succes: true,
     });
});

module.exports = app;