import { Magasin } from "./Magasin";
import { Utilisateur } from "./Utilisateur";

export class Employe{
    id_employe: number =0;
    magasin_employe: Magasin = new Magasin();
    user_employe: Utilisateur = new Utilisateur();

    constructor(idEmploye: number, magasinEmploye: Magasin, userEmploye: Utilisateur[]){
        this.id_employe= idEmploye;
        this.magasin_employe= magasinEmploye;
        this.user_employe= userEmploye;

    }
  
}