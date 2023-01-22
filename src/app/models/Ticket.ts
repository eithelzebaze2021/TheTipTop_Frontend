import { Client } from "./Client";
import { Gain } from "./Gain";
import { Magasin } from "./Magasin";

export class Ticket{
    id_ticket: number = 0;
    montant: string ="";
    numero: number =0;
    id_magasin: Magasin = new Magasin;
    id_gain: number= 0;
    id_client: number=0;
    gain_recu: boolean= false;
}