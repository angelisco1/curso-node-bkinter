import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendehumoComponent } from './vendehumo/vendehumo.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DetalleVendehumoComponent } from './detalle-vendehumo/detalle-vendehumo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    VendehumoComponent,
    InicioComponent,
    FormularioComponent,
    DetalleVendehumoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
