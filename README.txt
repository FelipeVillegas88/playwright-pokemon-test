Prueba de Integración Playwright PokéAPI
Descripción
Este proyecto contiene una prueba de integración desarrollada con Playwright y TypeScript utilizando la API pública PokéAPI.

La prueba obtiene la cadena evolutiva del Pokémon Squirtle, extrae los nombres de los Pokémon y su peso (weight), los ordena alfabéticamente sin utilizar métodos de ordenamiento nativos como .sort() y muestra el resultado en consola.

Requisitos
Node.js

npm

Instalación
Clonar el repositorio:

git clone https://github.com/tu-usuario/playwright-pokeapi-test.git
Entrar al directorio del proyecto:

cd playwright-pokeapi-test
Instalar dependencias:

npm install
Instalar navegadores de Playwright:

npx playwright install
Ejecución de la prueba
Para ejecutar las pruebas:

npx playwright test
o

npm test
Flujo de la prueba
Consultar el endpoint del Pokémon Squirtle.

Obtener el endpoint de species.

Obtener la cadena evolutiva.

Extraer los nombres de los Pokémon en la evolución.

Consultar cada Pokémon para obtener su weight.

Ordenar los resultados alfabéticamente con un algoritmo propio.

Mostrar el nombre y el peso de cada Pokémon en consola.