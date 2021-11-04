import { Component, OnInit } from '@angular/core';
import { VendehumosService } from '../vendehumos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  listaVendehumos: Array<any> = []

  constructor(private vhService: VendehumosService) { }

  ngOnInit(): void {
    this.vhService.getVendehumos()
      .subscribe((datos: any) => {
        console.log(datos)
        this.listaVendehumos = datos;
      })
  }

}
