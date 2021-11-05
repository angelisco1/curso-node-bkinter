import { Component } from '@angular/core';
import { VendehumosService } from './vendehumos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-vendehumos';
  estaLogueado = false

  constructor(private vhService: VendehumosService) {}

  ngOnInit() {
    if (localStorage.getItem('jwt')) {
      this.estaLogueado = true
    }

    this.vhService.usuarioLogueado.subscribe(logueado => {
      this.estaLogueado = logueado
    })
  }

  logout() {
    localStorage.removeItem('jwt')
    //this.estaLogueado = false
    this.vhService.usuarioLogueado.emit(false)
  }
}
