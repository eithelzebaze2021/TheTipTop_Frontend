import { Ticket } from "./Ticket";
import { Utilisateur } from "./Utilisateur";

export class Client{
    id_client: number =0;
    user_client: Utilisateur = new Utilisateur();
    list_ticket: Ticket[] = []  ;
}
