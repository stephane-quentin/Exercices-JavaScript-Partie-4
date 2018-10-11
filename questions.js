/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length; // length pour la longueur de la chaine de caractères
}
var remplaceECar = function (texte) {
    return texte.replace("e"," "); // replace, pour remplacer le premier e par un espace
}
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2); //concat pour concaténer 2 textes
}
var afficherCar5 = function (texte) {
    return texte.charAt(4); // charAt renvoit le caractère définit, ici le 5ème, le premeir élément d'un tableau étant le 0
}
var afficher9Car = function (texte) {
    return texte.slice(0,9); //slice coupe entre ce qui est définit, ici entre le premier caractère et le 10ème
}
var majusculeString = function (texte) {
    return texte.toUpperCase(); //toUpperCase, met tout en majuscule
}
var minusculeString = function (texte) {
    return texte.toLowerCase(); //toLowerCase, met tout en minuscule
}
var SupprEspaceString = function (texte) {
    return texte.trim(); // Supprime les espaces au début et à la fin
}
var IsString = function (texte) {
    return isNaN(texte);
}
var AfficherExtensionString = function (texte) {
    return texte.slice(texte.lastIndexOf(".") +1);
}
var NombreEspaceString = function (texte) {
    return texte.split(" ").length-1;
}
var InverseString = function (texte) {
    return texte.split("").reverse().join(""); //transforme le string en array avec split puis l'inverse avec reverse, reverse ne fonctionnant qu'avec une array
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return x**y; //ou Math.pow(x,y)
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre); //abs pour valeur absolue d'un nombre
}
var valeurAbsolueArray = function (array) {
    return array.map(Math.abs); //map crée un nouveau tableau avec les résultats de l'ancien et la fonction entre parenthèse
}
var sufaceCercle = function (rayon) {
    return Math.round((rayon*rayon)*Math.PI); //arrondi au chiffre entier supérieur
}
var hypothenuse = function (ab, ac) {
    return Math.sqrt((ab*ab)+(ac*ac)); //racine carré
}
var calculIMC = function (poids, taille) {
    return Math.round((poids / (taille * taille))*100)/100; //j'aime pas, mais le tofixed ne fonctionne pas...
}
