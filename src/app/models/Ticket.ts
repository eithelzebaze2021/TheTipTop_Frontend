import {Gain} from "./Gain";
import {Client} from "./Client";
import {Magasin} from "./Magasin";

export class Ticket{
    idTicket: number = 0;
    montant: string ="";
    numero: number =0;
    idMagasin: number=0;
    idGain: number= 0;
    idClient: number=0;
    gainRecu: boolean= false;
    gain : Gain = new Gain();
    client: Client = new Client();
    magasin: Magasin = new  Magasin();

}
