const tridecroissant = {
    tri : function (tab1, tab2)
    {
    // tri ordre décroissant
        let tmp1;
        let tmp2;
        for (let i = 0; i < tab1.length-1; i++) {
            for ( let j = i+1; j < tab1.length; j++) {
                if (tab1[i] < tab1[j]) {
                
                    tmp1 = tab1[i];
                    tab1[i]= tab1 [j];
                    tab1[j]=tmp1;

                    tmp2 = tab2[i];
                    tab2[i]= tab2[j];
                    tab2[j]=tmp2;
                }
            }
        }
    }
};

module.exports = tridecroissant;