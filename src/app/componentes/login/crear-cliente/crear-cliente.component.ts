import { Component, OnInit } from '@angular/core';

// Formularios
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
// Modelo y servicios
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from 'src/app/servicios/cliente.service';
// Rutas
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  // Variables Aux
  correo !: any;
  public id:any;

  formValue !: FormGroup;

  clienteModel : Cliente = new Cliente();

  public mensajeOk: any;
  public mensajeError: any;

  constructor(
    public formBuilder: FormBuilder,
    public clienteService: ClienteService,
    public router: Router
  ) { }

  ngOnInit(): void {

    this.obtenerDatos();

  }

  obtenerDatos(){
    this.formValue = this.formBuilder.group({
      nombres: [''], 
      apellidos: [''], 
      documento: [''],
      telefono: [''], 
      email: [''], 
      contrasena: [''],
      placas: [''],
    })
  }


  crearCliente(){

    this.clienteModel.nombres = this.formValue.value.nombres;
    this.clienteModel.apellidos = this.formValue.value.apellidos;
    this.clienteModel.documento = this.formValue.value.documentos;
    this.clienteModel.telefono= this.formValue.value.telefono;
    this.clienteModel.email = this.formValue.value.email;
    this.clienteModel.contrasena = this.formValue.value.contrasena;
    this.clienteModel.placas = this.formValue.value.placas;

    if(this.clienteModel.nombres ==""){
      this.mensajeError = "El campo de nombres no puede estar vacio"
    } 
    else if(this.clienteModel.apellidos ==""){
      this.mensajeError = "El campo de apellidos no puede estar vacio"
    }
    else if(this.clienteModel.documento ==""){
      this.mensajeError = "El campo de documento no puede estar vacio"
    } 
    else if(this.clienteModel.telefono ==""){
      this.mensajeError = "El campo de teléfono no puede estar vacio"
    }
    else if(this.clienteModel.email ==""){
      this.mensajeError = "El campo de Email no puede estar vacio"
    }
    else if(this.clienteModel.contrasena ==""){
      this.mensajeError = "El campo de contraseña no puede estar vacio"
    }
    else if(this.clienteModel.placas ==""){
      this.mensajeError = "El campo de placas no puede estar vacio"
    }
    else{
      this.clienteService.crearcliente(this.clienteModel)
        .subscribe(res =>{
        console.log(res);

        if(res.mensaje == "El cliente ya se encuentra creado"){
          this.mensajeError = "El cliente ya se encuentra registrado"
        }
        else{
          this.mensajeOk = "El usuario se registró correctamente"
          this.router.navigate(['login']);
        }

      },
      err =>{
        console.log(err)
      })
    }         
    
  }

}
