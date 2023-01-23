import { Role } from "./Role";

export class Utilisateur{
    id_user: number =0;
    adresse: string ="";
    code_postal: string ="";
    mail: string ="";
    nom: string ="";
    password: string ="";
    prenom: string ="";
    id_role: number =0;

    constructor(idUser: number, adresseUtilisateur: string, codePostal: string, mailUtilisateur: string, nomUtilisateur: string, passwordUtilisateur: string, prenomUtilisateur: string, idRole: number){
        this.id_user = idUser;
        this.adresse = adresseUtilisateur;
        this.code_postal = codePostal;
        this.mail = mailUtilisateur;
        this.nom = nomUtilisateur;
        this.password = passwordUtilisateur;
        this.prenom = prenomUtilisateur;
        this.id_role = idRole;

    }
   
}