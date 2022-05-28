import { Component, OnInit } from '@angular/core';

// Para Formularios
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Para Rutas
import { Router } from '@angular/router';
// Para la lógica
import { ClienteService } from 'src/app/servicios/cliente.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Variables Aux
  public user: any;
  public token: any;
  public identity: any;
  public nombre: any;
  
  public mensajeOk: any;
  public mensajeError: any;

  formValue !: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private clienteService: ClienteService, 
    private router: Router) { }

  ngOnInit(): void {
    this.camposLogin();
  }

  camposLogin(){

    this.formValue = this.formBuilder.group({
      email: [''],
      contrasena: [''],
    });

  }


  login(){

    if(this.formValue.value.email == ""){
      alert("Debe diligenciar su correo");
    }
    else if(this.formValue.value.contrasena == ""){
      alert("Debe diligenciar su contraseña");
    }
    else{

      this.clienteService.login(this.formValue.value).subscribe(
        (response) => {
          console.log(response);

          if(response.mensaje == "Correo Incorrecto"){
            alert("El correo no existe");
          }
          else if(response.mensaje == "Contraseña Incorrecta"){
            alert("La contraseña es incorrecta");
          }
          else{
            alert("Inicio de sessión exitoso!")

            // Variables de BD
            this.token = response.token
            this.nombre = response.nombres
            this.identity = response.id

            // Local Storage
            localStorage.setItem('token', this.token);
            localStorage.setItem('nombres', this.nombre);
            localStorage.setItem('id', this.identity);

            

          this.clienteService.login(this.formValue.value).subscribe(
              
            response =>{
              console.log(response)

              this.router.navigate([''])
              
            },
            error => {
              console.log(error)
              alert(error)
            }

            )
            
          }
          
          },
          error => {
            console.log(error)
            alert(error)
        }
      );

    }

  }


}
