import { Ticket } from "./Ticket";
import { Utilisateur } from "./Utilisateur";

export class Client{
    id_client: number =0;
    user_client: Utilisateur = new Utilisateur;
    list_ticket: Ticket[] = []  ;

    constructor(idClient: number, userClient: Utilisateur, listTicket: Ticket[] ){
        this.id_client = idClient;
        this.user_client = userClient;
        this.list_ticket = listTicket;
        
    }
    
}