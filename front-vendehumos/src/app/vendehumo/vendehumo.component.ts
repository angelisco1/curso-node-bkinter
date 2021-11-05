import { Component, Input, OnInit } from '@angular/core';
import { VendehumosService } from '../vendehumos.service';

@Component({
  selector: 'app-vendehumo',
  templateUrl: './vendehumo.component.html',
  styleUrls: ['./vendehumo.component.css']
})
export class VendehumoComponent implements OnInit {
  @Input() vh: any = null
  estaLogueado = false

  constructor(private vhService: VendehumosService) { }

  ngOnInit(): void {
    if (localStorage.getItem('jwt')) {
      this.estaLogueado = true
    }

    this.vhService.usuarioLogueado.subscribe(logueado => this.estaLogueado = logueado)
  }

  votar() {
    this.vhService.updateVotos(this.vh.id)
      .subscribe(() => {
        /* alert('Voto correcto') */
      })
  }

}
