import { apprenants } from "./data.js";

export function normaliserNom(nom) {
    return nom.trim().toLowerCase();
}

export function validerResultat(jour, exercicesTermines, totalExercices) {
    if (jour < 1 || jour > 7) {
        return false;
    }

    if (exercicesTermines > totalExercices) {
        return false;
    }

    return true;
}