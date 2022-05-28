import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente.service';
// import { threadId } from 'worker_threads';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  public id: any;
  public token: any;
  public nombres: any;

  constructor(private router: Router, private clienteservice: ClienteService) { 
    this.id = this.clienteservice.obtenerIdentidad();
    this.token = this.clienteservice.obtenerToken();
    this.nombres = this.clienteservice.obtenernombre();
  }

  ngOnInit(): void {

  }

  inicioSesion(){
    this.router.navigate(['/login']);
  }

  cerrarSesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('nombres');

    this.id = null;
    this.nombres = null;
    this.nombres = null;

    this.router.navigate(['/login']);
  }


}
