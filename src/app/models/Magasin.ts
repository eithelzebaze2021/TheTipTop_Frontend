import { Ticket } from "./Ticket";

export class Magasin{
    id_magasin: number =0;
    adresse: string ="";
    code_postal: string ="";
    nom_magasin: string ="";
    list_ticket: Ticket[] =[];

    constructor(idMagasin: number, adresseMagasin: string, codePostal: string, nomMagasin: string, listTicket: Ticket[]){
        this.id_magasin= idMagasin;
        this.adresse= adresseMagasin;
        this.code_postal= codePostal;
        this.nom_magasin= nomMagasin;
        this.list_ticket= listTicket;

    }
}