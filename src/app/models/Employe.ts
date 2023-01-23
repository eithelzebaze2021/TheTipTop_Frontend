import { Magasin } from "./Magasin";
import { Utilisateur } from "./Utilisateur";

export class Employe{
    id_employe: number =0;
    magasin_employe: Magasin = new Magasin();
    user_employe: Utilisateur = new Utilisateur();

}
