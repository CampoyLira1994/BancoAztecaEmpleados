import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormularioComponent } from './formulario/formulario.component';
import { LoginComponent } from './login/login.component';
import { EmpleadosComponent } from './formulario/empleados/empleados.component';


const routes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'empleados', component: EmpleadosComponent},


  // {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
