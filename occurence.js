// Récupèrer un objet 
// Lecture du fichier users.json
//TESST
const fs = require("fs"); // Déclare le module fs
let rawdata = fs.readFileSync("users.json"); // Lecture du fichier texte users.json -> résultat dans rawdata

// Affichage des users individuellement

let users = JSON.parse(rawdata); // Transforme en objet le fichier texte pour pouvoir travailler dessus

const occurence = {
    occurence : function (pays)
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
};

module.exports = occurence;