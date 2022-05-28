import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { BarraComponent } from './componentes/barra/barra.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { AgendaComponent } from './componentes/agenda/agenda.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CrearClienteComponent } from './componentes/login/crear-cliente/crear-cliente.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: InicioComponent},
  {path: 'barra', component: BarraComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'agenda', component: AgendaComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'crearCliente', component: CrearClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
