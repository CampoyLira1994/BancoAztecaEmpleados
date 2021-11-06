import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Empleado } from './../../models/empleado';

@Injectable({
  providedIn: 'root'
})

export class EmpleadosService {

  constructor(private http: HttpClient) { }

  readonly rootURL = 'https://localhost:44375/api';

  getEmpleados(): Observable<any> {
    return this.http.get(this.rootURL + '/Empleados');
  }

  getEmpleadoId(id: number): Observable<any> {
    return this.http.get(this.rootURL + '/Empleados/' + id);
  }

  createEmpleado(empleado: Empleado): Observable<any>{
    return this.http.post(this.rootURL + '/Empleados', empleado);
  }

  editEmpleado(empleado: Empleado): Observable<any>{
    return this.http.put(this.rootURL + '/Empleados/' + empleado.Id, empleado);
  }

  deleteEmpleado(id: number): Observable<any>{
    return this.http.delete(this.rootURL + '/Empleados/' + id);
  }


}