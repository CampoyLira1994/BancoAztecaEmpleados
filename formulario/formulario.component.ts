import { Component, OnInit } from '@angular/core';

import { EmpleadosService } from './../shared/services/empleados.service/empleados.service';

import { Empleado } from './../shared/models/empleado';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  empleados: [Empleado];
  empleado: Empleado;

  nombre: string = null;
  apellidoP: string;
  apellidoM: string;
  genero: string;
  fechaNacimiento: Date;
  pasatimepos1: boolean = false;
  pasatimepos2: boolean = false;
  pasatimepos3: boolean = false;
  pasatimepos4: boolean = false;
  documento: string = '';


  constructor(public empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.empleadosService.getEmpleados().subscribe(res => {
      console.log(res, 'Jala?');
      this.empleados = res;

    });
  }

  
  guardar(){
    this.empleado  = {
      Id: this.empleados.length +1 ,
      Nombres: this.nombre,
      ApellidoPaterno: this.apellidoP,
      ApellidoMaterno: this.apellidoM,
      Genero: this.genero,
      FechaNacimiento: this.fechaNacimiento,
      Dibujar: this.pasatimepos1,
      Leer: this.pasatimepos2,
      EscucharMusica: this.pasatimepos3,
      VerPeliculas: this.pasatimepos4,
      Documento: this.documento
    }
    console.log(this.empleado);

    if(this.empleado.Nombres != null){
      this.empleadosService.createEmpleado(this.empleado).subscribe(res => {
        console.log(res,);
      });
    }
}

    limpiar(){
      this.nombre = '';
      this.apellidoP = '';
      this.apellidoM = '';
      this.genero = '';
      this.fechaNacimiento = null;
      this.pasatimepos1 = false;
      this.pasatimepos2 = false;
      this.pasatimepos3 = false;
      this.pasatimepos4 = false;
      this.documento = '';
    }


}
