// Récupèrer un objet 
// Lecture du fichier users.json
//TESST
const fs = require("fs"); // Déclare le module fs
let rawdata = fs.readFileSync("users.json"); // Lecture du fichier texte users.json -> résultat dans rawdata

// Affichage des users individuellement

let users = JSON.parse(rawdata); // Transforme en objet le fichier texte pour pouvoir travailler dessus

// Parcourir un objet (tab)

const treatment = {
    unicite : function (tableau) {
        // tab[i] = users[j].filter(users => users[j].country != users[k].country)
        //boucle pour récupérer les pays
        for (let j=0; j<users.length; j++)
        {
            let unique = true;
            for (let k = 0; k < tableau.length; k++)
            {
                // si le pays apparaît déjà dans tab unique = false
                if (users[j].country == tableau[k])
                {   //console.log('in');
                    unique = false;
                }   
            }
            // sinon on ajoute à tab le pays trouvé 
            if (unique)
            {
                tableau.push(users[j].country); // tab[i]=users[j].country;
                //i = i +1;
            }
        }
    }

};

module.exports = treatment;