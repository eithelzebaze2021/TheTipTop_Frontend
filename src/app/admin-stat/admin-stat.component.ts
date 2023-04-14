import {Component, OnInit} from '@angular/core';
import {Chart, registerables} from "chart.js";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../service/AdminService";
import {EmployeService} from "../service/EmployeService";
import {ClientService} from "../service/ClientService";
import {Magasin} from "../models/Magasin";
import {MatTableDataSource} from "@angular/material/table";
import Swal from "sweetalert2";
import {Ticket} from "../models/Ticket";
import {GainService} from "../service/GainService";

@Component({
  selector: 'app-admin-stat',
  templateUrl: './admin-stat.component.html',
  styleUrls: ['./admin-stat.component.css']
})
export class AdminStatComponent implements OnInit{

  chartfigure1:any=[];
  date = new Date();
  tabMagasin:Magasin[]=[];
  tabMagasinString:String[]=[];
  tabTicket:Ticket[]=[];
  dataFigure1:number[]=[];
  dataFigure1Bis:number[]=[];

  constructor(private router: Router,
              private routeParam: ActivatedRoute,
              private adminService: AdminService,
              private gainService: GainService,
              private clientService: ClientService) {
    Chart.register(...registerables)
  }

  ngOnInit() {
    this.adminService.getAllMagasin().subscribe(resp=>{
      this.tabMagasin=resp;

      this.adminService.getAllTicketGain().subscribe(resp=>{
        this.tabTicket = resp;

        for(let elt of this.tabMagasin){
          this.tabMagasinString.push(elt.nomMagasin);
        }

        this.StatTicketGain();
      },error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Incorrect'
        });

      })

    },error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Incorrect'
      });

    })
  }


  StatTicketGain(){
    let compt=0;
    for(let elt of this.tabMagasin){
      compt=0;
      for(let elt1 of this.tabTicket){

        if((elt1.gainRecu==true) && (elt1.idMagasin==elt.idMagasin)){
          compt++;
        }
      }
      this.dataFigure1.push(compt);
    }

    for(let elt of this.tabMagasin){
      compt=0;
      for(let elt1 of this.tabTicket){

        if((elt1.gainRecu==false) && (elt1.idMagasin==elt.idMagasin)){
          compt++;
        }
      }
      this.dataFigure1Bis.push(compt);
    }

    console.log(this.dataFigure1Bis,this.dataFigure1)


        const data = {
          labels: this.tabMagasinString,
          datasets: [{
            label: 'Nombre de gain retiré',
            data: this.dataFigure1,
            backgroundColor: 'rgb(144,238,144,0.6)',
            borderWidth: 1
          },{
            label: 'Nombre de gain non retiré',
            data:this.dataFigure1Bis,
            backgroundColor: 'rgb(255,127,80,0.6)',
            borderWidth: 1
          }]
        };

        this.chartfigure1=new Chart('figure1', {
          type: 'bar',
          data: data,
          options: {
            scales: {
              x: {
                stacked: true
              },
              y: {
                stacked: true,
                beginAtZero: true
              }
            }
          },
        })



  }

  somme(tab:number[]):number{

    let sum=0;

    for(let elt of tab){
      sum = sum+elt
    }

    return sum
  }

}
