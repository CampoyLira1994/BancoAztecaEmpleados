import { Component, OnInit ,EventEmitter} from '@angular/core';

import { EmpleadosService } from '../../shared/services/empleados.service/empleados.service';
import { ExcelService } from './../../shared/services/excel.service/excel.service';

import { Empleado } from '../../shared/models/empleado';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})

export class EmpleadosComponent implements OnInit {

  enviarId: EventEmitter<number> = new EventEmitter<number>();

  documentoXLSX: any;

  empleados: [Empleado];
  empleado: Empleado;

  idEliminar: number;

  editEmpleadoBool: boolean = false;

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


  constructor(public empleadosService: EmpleadosService,
    private excelService: ExcelService) { }

  ngOnInit(): void {

    this.empleadosService.getEmpleados().subscribe(res => {
      console.log(res, 'Jala?');
      this.empleados = res;

    });

  }

  selectEmpleado(id){
    this.idEliminar = id;
    console.log(id);
    
  }

  eliminar(){
    this.empleadosService.deleteEmpleado(this.idEliminar).subscribe(rest => {
      console.log(rest);
      this.getEmpleado();
    });
  }

  getEmpleado(){
    this.empleadosService.getEmpleados().subscribe(res => {
      console.log(res, 'Jala?');
      this.empleados = res;

    });
  }

  editEmpleado(idEmpleado){
    if(this.editEmpleadoBool =! false){
      this.editEmpleadoBool = true;
    }else{
      this.editEmpleadoBool = false;
    }
    console.log(idEmpleado);
    this.empleadosService.getEmpleadoId(idEmpleado).subscribe(res => {
      this.empleado = res;
      console.log(this.empleado,'EmpleadoGet');
      this.guardarEdicion(idEmpleado);
      
    });

  }

  guardarEdicion(empleado){
    this.empleadosService.editEmpleado(empleado).subscribe(res => {
      console.log(this.empleado,'EmpleadoGet');
      this.getEmpleado();
    });
  }

  getDocument(evt: any){
    this.documentoXLSX =  evt;
  }


  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.empleados, 'footballer_data');
  }

  importASXLSX(uploadedFile){
    console.log(uploadedFile, 'uploadedFile');
    console.log(uploadedFile.target.files, '2uploadedFile');
    this.excelService.onFileChangeReporte(uploadedFile);
    this.getEmpleado();
  }


  
}
