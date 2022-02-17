# Cencosud

Todos los proyectos tienen su archivo `.env` para configurar.

## Docker
Correr servicios en docker con:

    docker-compose up
Esto abrirá los servicios de **kafka** y **mongodb**.

## MongoDB
Adicionalmente, docker abre un servidor para ver la base de datos MongoDB. Para acceder a ella debes ingresar desde el navegador a la url:

    http://localhost:8081/

## Frontend
El frontend se debe iniciar sin docker.

    cd frontend # Directorio del frontend
    npm i # Instalar dependencias
    npm run start # Abrir el servidor en el puerto 4500 por defecto

Luego de eso, abrir en el navegador:

    http://localhost:4500

## BFF
El backend se debe iniciar sin docker.

    cd bff # Directorio del backend
    npm i # Instalar dependencias
    npm run start # Abrir el servidor en el puerto 4501 por defecto

Luego de eso, se abrirá el backend disponible en:

    http://localhost:4501

## Salud
--