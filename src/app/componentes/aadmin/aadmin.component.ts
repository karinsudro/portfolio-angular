import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aadmin',
  templateUrl: './aadmin.component.html',
  styleUrls: ['./aadmin.component.css']
})
export class AadminComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }

}
