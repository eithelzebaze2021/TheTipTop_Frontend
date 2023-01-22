import { Ticket } from "./Ticket";

export class Magasin{
    id_magasin: number =0;
    adresse: string ="";
    code_postal: string ="";
    nom_magasin: string ="";
    listTicket: Ticket[] =[];
}