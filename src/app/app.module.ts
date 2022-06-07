import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './componentes/barra/barra.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';

import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

// Para trabajar con formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatDatepickerModule} from '@angular/material/datepicker';


// Protocolo HTTP
import {HttpClientModule} from '@angular/common/http';
import { NoAutorizadoComponent } from './componentes/no-autorizado/no-autorizado.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { AgendaComponent } from './componentes/agenda/agenda.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CrearClienteComponent } from './componentes/login/crear-cliente/crear-cliente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Prime

import {AccordionModule} from 'primeng/accordion';

import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    FooterComponent,
    InicioComponent,
    LoginComponent,
    NoAutorizadoComponent,
    ServiciosComponent,
    AgendaComponent,
    ProductosComponent,
    ContactoComponent,
    CrearClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    CalendarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
