import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleVendehumoComponent } from './detalle-vendehumo/detalle-vendehumo.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'nuevo-vendehumo', component: FormularioComponent },
  { path: 'vendehumos/:id', component: DetalleVendehumoComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
