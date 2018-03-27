// 1ra técnica: definir el object scores, donde el nombre de las amigas sean los keys y su puntale sean los value.
var scores = {
  nadya:0,
  maria:0,
  monica:0,
  andrea:0,
}; // object

/*
// 2da técnica: creando un array de objects, con los keys name y points y sus correspondientes elementos: nombre de la amiga y sus puntos
var object = [
  {name: "nadya", points: 0},
  {name: "maria", points: 0},
  {name: "monica", points: 0},
  {name: "andrea", points: 0}
];
*/

// 1ra técnica: crear una función que tome 2 argumentos (name, points) y actualice los puntos de cada jugadora en el object.
function game() {
  object.nadya = 80;
  object.maria = 100;
  object.monica = 20;
  object.andrea = 50;
}; // game
  console.log(game);

/*
// 2da técnica: crear una función que tome 2 argumentos (name, points) y actualice los puntos de cada jugadora en el object.
var game = function(name,points) {
  ([0],[1] = 80),
  ([1],[1] = 100),
  ([2],[1] = 20),
  ([3],[1] = 50),
}; //function.

console.log(game);
*/

/*
// 2da técnica: crea una función que imprima en la consola el total de puntos.
var score = 0;

var totalPoints = function () {
  for (var i = 0; i < object.length; i++)
    score += objects[i].points;
} // function totalPoins

console.log(score);
*/
