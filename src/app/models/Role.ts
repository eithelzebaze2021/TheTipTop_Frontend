import { Utilisateur } from "./Utilisateur";

export class Role{
    id_role: number=0;
    nom: string="";
    listUser: Utilisateur[] = [];
}