
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';


import { ExcelService } from './shared/services/excel.service/excel.service';
import { EmpleadosService } from './shared/services/empleados.service/empleados.service';
import { EmpleadosComponent } from './formulario/empleados/empleados.component';
import { FormularioComponent } from './formulario/formulario.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    EmpleadosComponent,
    FormularioComponent,
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

    // BrowserAnimationsModule,
    // ToastrModule
  ],
  providers: [EmpleadosService,
    ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
