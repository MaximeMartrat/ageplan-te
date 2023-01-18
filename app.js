// A partir des données astronomiques de révolution de chaque planète :

 

//   - Terre: periode orbitale 365.25 jours terrestres, 
//   - Mercure: periode orbitale 0.2408467 jours terrestres
//   - Venus: periode orbitale 0.61519726 jours terrestres
//   - Mars: periode orbitale 1.8808158 jours terrestres
//   - Jupiter: periode orbitale 11.862615 jours terrestres
//   - Saturne: periode orbitale 29.447498 jours terrestres
//   - Uranus: periode orbitale 84.016846 jours terrestres
//   - Neptune: periode orbitale 164.79132 jours terrestres

 

// Determinez l'âge qu'aurait une personne sur une autre planète, 
// par exemple quel age aurait une personne âgée de 1 000 000 000 secondes sur Terre => 31.69 ans

 

// Utilisez : 
// - une entrée texte pour entrer l'âge 
// - un menu déroulant pour selectionner la planète 

 

// et affichez en dessous l'âge correspondant

function plan(){
let myage = document.getElementById("age").value ;
let tempo = document.getElementById("tempus").value ;
let planete = document.getElementById("planète").value ;
let etoile = "" ;
   if (tempo == "heure") {
      tempo = myage*3600
   } else if (tempo == "jour") {
      tempo = myage*86400
   } else if (tempo =="an") {
      tempo = myage*31581360
   } else {
      tempo = myage
   }
   if (planete == "Terre") {
      planete = 365.25
      etoile = "Terre"
   } else if ( planete == "Mercure") {
      planete = 0.2408467
      etoile = "Mercure"
   } else if ( planete == "Venus") {
      planete = 0.61519726
      etoile = "Venus"
   } else if (planete == "Mars") {
      planete = 1.8808158
      etoile = "Mars"
   } else if (planete == "Jupiter") {
      planete = 11.862615
      etoile = "Jupiter"
   } else if (planete == "Saturne") {
      planete = 29.447498
      etoile = "Saturne"
   } else if (planete == "Uranus") {
      planete = 84.016846
      etoile = "Uranus"
   } else {
      planete = 164.79132
      etoile = "Neptune"
   }
   let result = tempo/3600/24/planete
   let arrondi = Math.floor(result)
   document.getElementById("temp").innerHTML = "Votre age sur la planete " + etoile + " est de " + arrondi + " ans"
}
