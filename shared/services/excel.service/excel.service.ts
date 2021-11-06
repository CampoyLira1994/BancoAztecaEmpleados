import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

import { EmpleadosService } from './../empleados.service/empleados.service';



const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  // xlData: any[];
  // arraySaparater: any[];
  data: any[];

  constructor(public empleadosService: EmpleadosService) { }


  public exportAsExcelFile(json: any[], excelFileName: string): void {

    const myworksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const myworkbook: XLSX.WorkBook = { Sheets: { data: myworksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(myworkbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_exported' + EXCEL_EXTENSION);
  }

  // tslint:disable-next-line: typedef
  onFileChangeReporte(evt: any) {
    const target: DataTransfer = (evt.target) as DataTransfer;
    if (target.files.length !== 1) { throw new Error('Cannot use multiple files'); }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1, defval: null }));
      console.log('data: ', this.data);
      // aplico slice para omitir los encabezados.
      const x = this.data.slice(1);
      console.log('x: ', x);
      x.forEach(reporte => {
        console.log(reporte, 'reporte');
        this.empleadosService.createEmpleado({
          Id: reporte[0],
          Nombres: reporte[1],
          ApellidoPaterno: reporte[2],
          ApellidoMaterno: reporte[3],
          Genero: reporte[4],
          FechaNacimiento: reporte[5],
          Dibujar: reporte[6],
          Leer: reporte[7],
          EscucharMusica: reporte[8],
          VerPeliculas: reporte[9],
          Documento: reporte[10]
         }).subscribe((data) => {
        });
      });
    };

    reader.readAsBinaryString(target.files[0]);

  }


  

}
