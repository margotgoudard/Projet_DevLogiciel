// TP1 Méthode Développement Logiciel - Margot Goudard INFO3A

// Récupèrer un objet 
// Lecture du fichier users.json
//TESST
const fs = require("fs"); // Déclare le module fs
let rawdata = fs.readFileSync("users.json"); // Lecture du fichier texte users.json -> résultat dans rawdata

// Affichage des users individuellement

let users = JSON.parse(rawdata); // Transforme en objet le fichier texte pour pouvoir travailler dessus
// Tableau pour le stock des pays + compteur 

// pays
let tab =[]; //new Array(); // liste pays
let tabCompteur = new Array(); // liste compteur

// Parcourir un objet (tab)

// tab[i] = users[j].filter(users => users[j].country != users[k].country)
//boucle pour récupérer les pays
for (let j=0; j<users.length; j++)
{
    let unique = true;
    for (let k = 0; k < tab.length; k++)
    {
        // si le pays apparaît déjà dans tab unique = false
        if (users[j].country == tab[k])
        {   //console.log('in');
            unique = false;
        }   
    }
    // sinon on ajoute à tab le pays trouvé 
    if (unique)
    {
        tab.push(users[j].country); // tab[i]=users[j].country;
        //i = i +1;
    }
}

// fonction qui calcule le nombre d'occurence d'un pays
function occurence(pays)
{
    let nboccur=0; 
    for (let l= 0; l < users.length; l++)
    {
        if (pays == users[l].country)
         
        {
         
            nboccur ++;
         
        }  
    }
    return nboccur;
}
            
// on rentre les occurences dans un tableau
for (let k=0; k<tab.length; k++)
{
    tabCompteur[k]= occurence(tab[k]);
}

/*
// trier tabCompteur en croissant
tabCompteur.sort();

// trier dans l'ordre décroissant 

for (let i = 0; i < tabCompteur.length/2; i++) {
    let tmp = tabCompteur[i];
    tabCompteur[i] = tabCompteur[tabCompteur.length - 1 - i];
    tabCompteur.length[tabCompteur.length - 1 - i] = tmp;
}
//ici le tableau compteur trié mais pas pays
*/

// tri ordre décroissant
let tmp1;
let tmp2;
for (let i = 0; i < tabCompteur.length-1; i++) {
    for ( let j = i+1; j < tabCompteur.length; j++) {
        if (tabCompteur[i] < tabCompteur[j]) {
            
            tmp1 = tabCompteur[i];
            tabCompteur[i]= tabCompteur [j];
            tabCompteur[j]=tmp1;

            tmp2 = tab[i];
            tab[i]= tab[j];
            tab[j]=tmp2;
        }
    }
}

let tabTriePays = new Array();

for ( let m=0; m<tab.length; m++)
{
    tabTriePays[m] =[ { pays :tab[m], compteur : tabCompteur[m]}];
}




//let resultat = users.group(({country}) => country);
console.log("  Pays et Compteur "); //Affichage à l'écran
console.log(tabTriePays);


// société
let tabSociete =[]; //new Array(); // liste pays
let tabCompteurSociete = new Array(); // liste compteur

// Parcourir un objet (tabSociete)

//boucle pour récupérer les sociétés
for (let j=0; j<users.length; j++)
{
    let unique = true;
    for (let k = 0; k < tabSociete.length; k++)
    {
        // si la société apparaît déjà dans tab unique = false
        if (users[j].company == tabSociete[k])
        {   //console.log('in');
            unique = false;
        }   
    }
    // sinon on ajoute à tab la société trouvé 
    if (unique)
    {
        tabSociete.push(users[j].company);
    }
}

// fonction qui calcule le nombre d'occurence d'une société

function occurence2(société)
{
    let nboccur=0; 
    for (let l= 0; l < users.length; l++)
    {
        if ( société == users[l].company)
         
        {
         
            nboccur ++;
         
        }  
    }
    return nboccur;
}
            
// on rentre les occurences dans un tableau
for (let k=0; k<tabSociete.length; k++)
{
    tabCompteurSociete[k]= occurence2(tabSociete[k]);
}


// tri ordre décroissant
let tmp3;
let tmp4;
for (let i = 0; i < tabCompteurSociete.length-1; i++) {
    for ( let j = i+1; j < tabCompteurSociete.length; j++) {
        if (tabCompteurSociete[i] < tabCompteurSociete[j]) {
            
            tmp3 = tabCompteurSociete[i];
            tabCompteurSociete[i]= tabCompteurSociete [j];
            tabCompteurSociete[j]=tmp3;

            tmp4 = tabSociete[i];
            tabSociete[i]= tabSociete[j];
            tabSociete[j]=tmp4;
        }
    }
}

let tabTrieSociete = new Array();

for ( let m=0; m<tabSociete.length; m++)
{
    tabTrieSociete[m] =[ { pays :tabSociete[m], compteur : tabCompteurSociete[m]}];
}

console.log("  Société et Compteur "); //Affichage à l'écran
console.log(tabTrieSociete);
