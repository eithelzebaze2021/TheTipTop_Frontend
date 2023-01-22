import { Ticket } from "./Ticket";

export class Gain{
    id_gain: number =0;
    nom_gain: string ="";
    nbre_ticket_restant: number =0;
    list_ticket: Ticket[] = [];

    constructor(idGain: number, nomGain: string, nbreTicketRestant: number, listTicket: Ticket[]){
        this.id_gain= idGain;
        this.nom_gain= nomGain;
        this.nbre_ticket_restant= nbreTicketRestant;
        this.list_ticket= listTicket;

    }
}