

# Arquitectura limpia ( Clean architecture)

here we can see A example architecture clean in a file sistem 
 
 
### index.js

inicar nuestra aplicacion 

se encarca de inicar nuestra app

### src/server.js
se encarga de albergar la descrioccion de nuestro servidor

### src/models

se encarga de albergar los modelos de base de datos (MongoDB)

### src/usecases

Cada archuivo tendra los casos de uso de cada una de las entidades/recursos que usara nuesttra aplicaion 

### src/routes

un archivo por cada router (express) que tenga nuestra API


### src/middlewares

funciones middleware de nuestra API

### src/lib

funciones utilitarias que no pertenecen a ninguna de las otras categorias.

por ejemplo

- el archivo de coneccion a la bade de datos
- la configuracion de nuestros tokens
- la configuracion de nuestra libreria de encriptado
- funciones para ordenar los usuarios de tal forma... etc


### scripts

iniciar produccion 
```bash
```npn strar

inicar en modo de desarrollo 
``` bash
```npm run dev