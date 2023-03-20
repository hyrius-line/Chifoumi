
let coups = ["PIERRE", "FEUILLE", "CISEAUX"];

let boutons = document.querySelectorAll("button");
let affichageCoupsJoues = document.querySelectorAll(
    ".container-coups-joues h2"
);
let statutJeu = document.querySelector("#statut-jeu");

let ScoreJoueur = 0;
let ScoreIA = 0;

commencerPartie();



/**
 * Calcule le résultat de la partie, et lie le message de victoire, défaite ou égalité
 * @param  {Number}   monCoup  
 * @param  {Number}   coupOrdi  
 * @return {String}   
 */
function calculerResultat(monCoup, coupOrdi) { }

/**
 * @return {Number}   
 */
function coupAleatoire() {
    return Math.floor(Math.random() * 3);
}


function commencerPartie() {
    statutJeu.textContent = "Jouez !";
    boutons.forEach((btn, index) => {
        btn.textContent = coups[index];
    });
    for (let i = 0; i < affichageCoupsJoues.length; i++) {
        affichageCoupsJoues[i].style.display = "none";
    }

    affichageCoupsJoues.forEach((element) => {
        element.style.display = "none";
    });

    for (let i = 0; i < boutons.length; i++) {
        boutons[i].textContent = coups[i];
        boutons[i].style.display = "inline-block";
        boutons[i].addEventListener("click", finirPartie);
    }
}

function calculerResultat(monCoup, coupOrdi) {
    if (monCoup === coupOrdi) {
        return "Copieur !";
    } else if (monCoup === 0) {
        if (coupOrdi === 2) {
            return "Bien joué !!!";
        } else {
            return "Perdu !";
        }
    } else if (monCoup === 1) {
        if (coupOrdi === 0) {
            return "Bien joué !!!";
        } else {
            return "Perdu !";
        }
    } else if (monCoup === 2) {
        if (coupOrdi === 1) {
            return "Bien joué !!!";
        } else {
            return "Perdu !";
        }
    }

}

/**
 * Affiche le résultat final de la partie
 * @param {Event} event événement contenant les informations de l'entrée utilisateur
 */

function finirPartie(event) {

    let monCoup = coups.indexOf(event.target.textContent);


    let coupOrdi = coupAleatoire();


    statutJeu.textContent = calculerResultat(monCoup, coupOrdi);

    affichageCoupsJoues[0].style.display = "inline-block";
    affichageCoupsJoues[0].textContent = coups[monCoup];
    affichageCoupsJoues[1].style.display = "inline-block";
    affichageCoupsJoues[1].textContent = "vs.";
    affichageCoupsJoues[2].style.display = "inline-block";
    affichageCoupsJoues[2].textContent = coups[coupOrdi];


    boutons[0].style.display = "none";
    boutons[2].style.display = "none";


    boutons[1].textContent = "Rejouer";


    boutons[1].removeEventListener("click", finirPartie);

    boutons[1].addEventListener("click", commencerPartie);

    function affScores() {
        switch (statutJeu.textContent) {
            case 'Bien joué !':
                ScoreJoueur++;
                affichageScores[1].textContent = ScoreJoueur;
                break;
            case 'Perdu !':
                ScoreIA++;
                affichageScores[2].textContent = ScoreIA;
                break;
            default:
                break;
        }
    }
}
