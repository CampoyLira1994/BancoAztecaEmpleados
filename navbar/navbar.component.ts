import { Component, OnInit , EventEmitter, Output} from '@angular/core';


import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  message = 'contacto!';


  @Output() servicioE = new EventEmitter<number>();

  constructor(
              private router: Router) { }

  ngOnInit(): void {
    // this.serviciosService.getServicios().subscribe(
    //   (data) => {
    //   // console.log('Data:', data);
    //   this.servicios =  data;
    //   });
  }

  // tslint:disable-next-line: typedef
   servicio(idServicio){
    // console.log(idServicio);
    this.router.navigate(['/foodService/' + idServicio]);
    this.servicioE.emit(idServicio);
  }

}
