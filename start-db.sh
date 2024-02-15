#!/bin/bash

# Define las variables de configuración
NOMBRE_CONTENEDOR="shopping"
PUERTO_HOST=3306
PUERTO_CONTENEDOR=3306
USUARIO="salamander"
CONTRASENA="salamander1234"
BASE_DATOS="shop"

# Verifica si el contenedor ya está en ejecución
if [ "$(docker ps -q -f name=${NOMBRE_CONTENEDOR})" ]; then
    echo "El contenedor ya está en ejecución."
else
    # Crea y arranca el contenedor de MySQL
    docker run -d \
        --name ${NOMBRE_CONTENEDOR} \
        -e MYSQL_ROOT_PASSWORD=${CONTRASENA} \
        -e MYSQL_DATABASE=${BASE_DATOS} \
        -e MYSQL_USER=${USUARIO} \
        -e MYSQL_PASSWORD=${CONTRASENA} \
        -p ${PUERTO_HOST}:${PUERTO_CONTENEDOR} \
        mysql:latest

    echo "Contenedor MySQL iniciado en el puerto ${PUERTO_HOST}."
fi
