// Objeto SCORES va a llevar el registro de los jugadores y sus puntos.
var scores = {};
console.log(scores);

// crear función para generar los keys del objeto score
function createPlayer(object,name) {
  object[name.toLowerCase()] = 0;
  console.log(object);
}; // function

// Le estoy asignando los value a las keys que están en el objeto SCORES
function addPoints(name,points) {
  scores[name.toLowerCase()] += points;
  console.log(scores);
}; // function

// función para imprimir todos los puntos de los jugadores
function printAllPoints() {
  var arrayPlayers = Object.keys(scores); // tengo las keys del objeto
  var resultados = "";
  for (var k = 0; k < arrayPlayers.length; k++) {
    resultados += arrayPlayers[k] + ": " + scores[arrayPlayers[k]] + ", ";
    if ( k == arrayPlayers.length -1) { // se verifica que estemos en el último index para quitar la coma que separa los elementos
      resultados += arrayPlayers[k] + ": " + scores[arrayPlayers[k]];
    } else { // si NO es el ultimo index se deja la coma de sepación.
      resultados += arrayPlayers[k] + ": " + scores[arrayPlayers[k]] + ", ";
       } // if
    } //for
    return resultados;
  }; // function


createPlayer(scores, "Ana");
addPoints("Ana", 20);
addPoints("ana", 40);
createPlayer(scores, "Silvana");
addPoints("silvana", 40)
// console.log(printAllPoints());
