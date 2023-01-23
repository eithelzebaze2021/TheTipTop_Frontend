import { Client } from "./Client";
import { Gain } from "./Gain";
import { Magasin } from "./Magasin";

export class Ticket{
    id_ticket: number = 0;
    montant: string ="";
    numero: number =0;
    id_magasin: number=0;
    id_gain: number= 0;
    id_client: number=0;
    gain_recu: boolean= false;

    constructor(idTicket: number, montantTicket: string, numeroTicket: number, idMagasin: number, idGain: number, idClient: number, gainRecu: boolean){
        this.id_ticket= idTicket;
        this.montant= montantTicket;
        this.numero= numeroTicket;
        this.id_magasin= idMagasin;
        this.id_gain= idGain;
        this.id_client= idClient;
        this.gain_recu= gainRecu;

    }
}