import { Injectable } from '@angular/core';

// Importaciones
import { Observable, map } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cliente } from '../componentes/models/cliente.model';

const base_url = environment.url 

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public user: any;
  public token: any;
  public identity: any;
  public nombres: any;
  public id: any;

  constructor(private http: HttpClient) { }

  crearcliente(data: any){
    return this.http.post<any>(base_url + 'cliente/crearCliente', data)
    .pipe(map((res:any) => {
      return res;
    }))
  }
  
  login(cliente: any, obtenerToken = null): Observable<any>{
    
    let json = cliente;
    if(obtenerToken != null){
      cliente.token = true
    }

    let headers = new HttpHeaders().set('Content-Type','application/json')
    return this.http.post(base_url + 'cliente/loginCliente', json, {headers: headers});

  }

  obtenerToken(): Observable<any>{

    let tokenAux = localStorage.getItem('token');
    if(tokenAux){
      this.token = tokenAux;
    }
    else{
      this.token = null;
    }

    return this.token;

  }

  obtenerIdentidad(): Observable<any>{

    let identityAux = localStorage.getItem('id')
    if(identityAux){
      this.identity = identityAux
    }
    else{
      this.identity = null
    }

    return this.identity

  }

  obtenernombre(): Observable<any>{

    let nombresAux = localStorage.getItem('nombres')
    if(nombresAux){
      this.nombres = nombresAux
    }
    else {
      this.nombres = null
    }

    return this.nombres

  }

}
