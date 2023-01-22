import { Role } from "./Role";

export class Utilisateur{
    id_user: number =0;
    adresse: string ="";
    code_postal: string ="";
    mail: string ="";
    nom: string ="";
    password: string ="";
    prenom: string ="";
    id_role: Role = new Role;
   
}