import { Component, OnInit } from '@angular/core';
import { Red } from 'src/app/model/red';
import { RedService } from 'src/app/servicios/red.service';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  redes?:Red[];



  constructor(private redesServ:RedService) { }

  ngOnInit(): void {
    this.getRed();
  }

  getRed(): void{   //sin retorno, solo caraga datos
    this.redesServ.getRedes().subscribe(data => (this.redes=data));
  }

}
