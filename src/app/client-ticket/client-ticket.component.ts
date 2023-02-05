import {Component, OnInit} from '@angular/core';
import {ClientService} from "../service/ClientService";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-ticket',
  templateUrl: './client-ticket.component.html',
  styleUrls: ['./client-ticket.component.css']
})
export class ClientTicketComponent implements OnInit{

  constructor(private clientService: ClientService) {

  }

  ngOnInit(): void {
    this.clientService.getAllTicketClient(this.clientService.clientConnect.idClient,0,15).subscribe(resp => {
      if(resp.length==0){
        Swal.fire({
          text: "Vous n'avez pas de ticket enregistré",
          icon:'warning',
          showDenyButton: true,
          confirmButtonText: "J'enregistre un ticket",
          denyButtonText: "Pas de ticket",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire({
              title: 'Numéro ticket',
              input: 'text',
              inputLabel: 'Entrez le numéro du ticket',
              inputPlaceholder: 'Entrez le numéro du ticket'
            }).then(({ value: text })=>{
              if (text) {
                Swal.fire(`Le numero ticket est : ${text}`)

                this.clientService.saveTicketClient(text).subscribe(()=>{
                  
                })

              }
            })

          }
        })
      }
    })
  }

}
