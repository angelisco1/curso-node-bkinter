import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

interface ICredenciales {
  usuario: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class VendehumosService {
  usuarioLogueado = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  getVendehumos() {
    return this.http.get('http://localhost:3001/vendehumos')
  }

  createVendehumos(datos: any) {
    return this.http.post('http://localhost:3001/vendehumos', datos, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwt')
      }
    })
  }

  updateVotos(id: number) {
    return this.http.patch('http://localhost:3001/vendehumos/' + id, null, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwt')
      }
    })
  }

  login(datos: ICredenciales) {
    return this.http.post('http://localhost:3001/login', datos)
  }
}
