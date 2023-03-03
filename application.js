// TP1 Méthode Développement Logiciel - Margot Goudard INFO3A

//appel des autres fichiers js
const treatment = require("./treatment");
const treatmentSociete = require("./treatmentSociete");
const occurence = require("./occurence");
const tridecroissant= require("./tridecroissant");
const occurenceSociete= require("./occurenceSociete");

// pays
// Tableau pour le stock des pays + compteur 

let tab =[]; //new Array(); // liste pays
let tabCompteur = new Array(); // liste compteur

// tableau avec les pays unique

treatment.unicite(tab);

// on rentre les occurences dans un tableau
for (let k=0; k<tab.length; k++)
{
    tabCompteur[k]= occurence.occurence(tab[k]);
}

// tri ordre décroissant

tridecroissant.tri(tabCompteur, tab);

//tableau avec pays et compteur

let tabTriePays = new Array();

for ( let m=0; m<tab.length; m++)
{
    tabTriePays[m] =[ { pays :tab[m], compteur : tabCompteur[m]}];
}


// société
let tabSociete =[]; //new Array(); // liste pays
let tabCompteurSociete = new Array(); // liste compteur

// tableau avec les societes unique 

treatmentSociete.uniciteS(tabSociete);

     
// on rentre les occurences dans un tableau
for (let k=0; k<tabSociete.length; k++)
{
    tabCompteurSociete[k]= occurenceSociete.occurenceS(tabSociete[k]);
}


// tri ordre décroissant

tridecroissant.tri(tabCompteurSociete, tabSociete);

//tableau avec société et compteur

let tabTrieSociete = new Array();

for ( let m=0; m<tabSociete.length; m++)
{
    tabTrieSociete[m] =[ { pays :tabSociete[m], compteur : tabCompteurSociete[m]}];
}


//demande à l'utilisateur de saisir le compteur qu'il souhaite voir

var readlineSync = require("readline-sync");

const nb = Number(readlineSync.question(" Quel compteur voulez-vous voir ? \n 1- Pays \n 2-Societe\n"));

if (nb == 1)
{
    //Affichage à l'écran
    console.log("  Pays et Compteur "); 
    console.log(tabTriePays);

}

else 

{ 
//Affichage à l'écran
    console.log("  Société et Compteur "); 
    console.log(tabTrieSociete);
}
