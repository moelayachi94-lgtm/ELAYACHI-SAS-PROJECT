import { apprenants } from "./data.js";

export function normaliserNom(nom) {
    return nom.trim().toLowerCase();
}

export function validerResultat(jour, exercicesTermines, totalExercices, challengeTermine) {
    if (jour < 1 || jour > 7) {
        return false;
    }

    if (exercicesTermines > totalExercices) {
        return false;
    }

    if ( exercicesTermines < 0 || totalExercices < 0){
        return false; 
    }

    if (challengeTermine !== 1 && challengeTermine !== 0){
        return false;
    }
    return true;
}

export function ajouterApprenant ( nomComplet, ville){
 for ( let item of apprenants)
    if (nomComplet === item.nomComplet)
        return false ; 

let newStudent = {
    id : apprenants.length + 1, 
    nomComplet : nomComplet,
    ville : ville,
    resultats : []
}
apprenants.push(newStudent)
        return true 
}

export function rechercherapprenant(critere) {
  for (let apprenant of apprenants) {
    if (typeof critere === 'string') {
      if (normalisernom(apprenant.nomComplet).includes(normalisernom(critere))) {
        return apprenant;
      }
    } else if (critere === apprenant.id) {
      return apprenant;
    }
  }
  return null;
}
