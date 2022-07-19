# Desafío - Collage de Imágenes

## Habilidades a Evaluar

-  Express-fileupload
-  Subiendo un archivo con Postman

## Descripción

Un fotógrafo profesional de reconocimiento mundial quiere actualizar su sitio web y ha pensado en agregar una sección que muestre un collage de imágenes con sus mejores fotos. En este desafío deberás crear un servidor con Express y el paquete express-fileupload para almacenar las imágenes que estarán dentro del collage.

En el material de esta sesión encontrarás un **Apoyo Desafío - Collage de imágenes** con 2 archivos HTML correspondientes al formulario para la carga de imágenes y al collage hecho con CSS Grid. Siéntete libre de personalizar la maqueta si así lo vés conveniente, siempre y cuando se cumplan los requisitos.

En la siguiente imagen puedes ver una muestra del formulario para la carga de imágenes al servidor:

<p align="center">
   <img src=./public/images/img01.png>
</p>

En esta imagen puedes ver una muestra del collage de imágenes finalizado:

<p align="center">
   <img src=./public/images/img02.png>
</p>

## Requerimientos

1. Integrar express-fileupload a Express. **(1 Punto)**
2. Definir que el límite para la carga de imágenes es de 5MB. **(2 Puntos)**
3. Responder con un mensaje indicado que se sobrepasó el límite especificado. **(2 Puntos)**
4. Crear una ruta **POST /imagen** que reciba y almacene una imagen en una carpeta pública del servidor. Considerar que el formulario envía un payload con una propiedad "position", que indica la posición del collage donde se deberá mostrar la imagen. **(3 Puntos)**
5. Crear una ruta **DELETE /imagen/:nombre** que reciba como parámetro el nombre de una imagen y la elimine de la carpeta en donde están siendo alojadas las imágenes. Considerar que esta interacción se ejecuta al hacer click en alguno de los números del collage. **(2 Puntos)**

## Dónde Encontrar cada Requerimiento

1. `app.js`
2. `app.js`
3. `app.js`
4. `routes/image-route.js`
5. `routes/image-route.js`

## Notas

## TODO

-  Cargar imagenes al iniciar
