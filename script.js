function inverserChaine(chaine) {
    var chaineInverse = '';
    for ( i = chaine.length - 1; i >= 0; i--) {
        chaineInverse += chaine[i];
    }
    return chaineInverse;
}

function compterCaracteres(chaine){
    return chaine.length;
    
    
}


// function mettreMotsEnMajuscule(mot){
//     var phraseEnMajuscule = '';

//     for (i = 0; i < mots.length; i++) {
//     }
// }

function trouverMax(tableau) {
    var max=0;
    var min=0;
    for(i=1;i<tableau.length;i++){
        if (tableau[i] > max) {
            max = tableau[i];
        }
    }
    return max;
}
function trouverMin(tableau) {
    var max=0;
    var min=0;
    for(i=1;i<tableau.length;i++){
        if (tableau[i] <min) {
            min = tableau[i];
        }
    }
    return max;
}
function sommeTableau(tableau) {
    var somme = 0;
    for ( i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme;
}
function filtrerTableau(tableau, condition) {
    var resultat = [];
    for (i = 0; i < tableau.length; i++) {
       
        if(condition == true){
            resultat.push(tableau[i]); 
        }
    }
    return resultat;
}
function factorielle(nombre) {
    if (nombre === 0 || nombre === 1) {
        return 1;
    } else {
        var resultat = 1;
        for ( i = 2; i <= nombre; i++) {
            resultat *= i;
        }
        return resultat;
    }
}
function estPremier(nombre) {
    if (nombre <= 1) {
        return false;
    }

    if (nombre <= 3) {
        return true;
    }
    if (nombre % 2 === 0 || nombre % 3 === 0) {
        return false;
    }

    return true;
    
    }
