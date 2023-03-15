import {Component, OnInit} from '@angular/core';
import {ClientService} from "../service/ClientService";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-ticket',
  templateUrl: './client-ticket.component.html',
  styleUrls: ['./client-ticket.component.css']
})
export class ClientTicketComponent implements OnInit{

   tabTicket: Ticket[]=[];

  constructor(private clientService: ClientService) {

  }

  ngOnInit(): void {
    this.clientService.getAllTicketClient(this.clientService.clientConnect.idClient).subscribe(resp => {
      if(resp.length==0){
         this.ajoutTicket()
      }else{
        this.tabTicket=resp;
      }
    })
  }

  ajoutTicket() {
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
            Swal.fire(`Le numero ticket est : ${text}`).then((value)=>{
              if(value){

                this.clientService.saveTicketClient(text).subscribe((resp)=>{

                  if(resp){

                    Swal.fire({
                      position: 'center',
                      icon: 'success',
                      title: 'Ticket enregistré',
                      showConfirmButton: false,
                      timer: 1500
                    }).then(()=>{
                      this.clientService.getAllTicketClient(this.clientService.clientConnect.idClient).subscribe(resp => {
                        if(resp.length==0){
                          this.ajoutTicket()
                        }else{
                          this.tabTicket=resp;
                        }
                      })
                    })

                  }else{
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'Numéro incorrect !'
                    });
                  }

                })

              }

            })

          }
        })

      }
    })
  }

}
