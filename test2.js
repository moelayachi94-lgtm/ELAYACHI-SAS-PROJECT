import { apprenants } from "./src/data.js";
function afficherApprenants() {
    for (let apprenant of apprenants) {
        console.log(apprenant);
    }
}
afficherApprenants()