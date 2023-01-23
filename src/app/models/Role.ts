import { Utilisateur } from "./Utilisateur";

export class Role{
    id_role: number=0;
    nom: string="";
    list_user: Utilisateur[] = [];

    constructor( idRole: number, nomRole: string, listUser: Utilisateur[]){
        this.id_role= idRole;
        this.nom= nomRole;
        this.list_user= listUser;


    }
}