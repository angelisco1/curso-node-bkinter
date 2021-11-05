import { Component, OnInit } from '@angular/core';
import { VendehumosService } from '../vendehumos.service';
import { socket } from '../../main'

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

    socket.on('actualizaLosVotos', (datos: any) => {
      console.log('Viene por socket', {datos})
      this.listaVendehumos = this.listaVendehumos.map(vh => {
        if (vh.id == datos.id) {
          return {...vh, votos: datos.votos}
        }
        return {...vh};
      })
      console.log(this.listaVendehumos)

    })
  }

}
