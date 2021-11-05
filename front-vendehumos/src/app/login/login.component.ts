import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VendehumosService } from '../vendehumos.service';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private vhService: VendehumosService,
    private router: Router
  ) {

    this.formulario = new FormGroup({
      usuario: new FormControl(''),
      password: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  login() {
    this.vhService.login(this.formulario.value)
      .subscribe((token: any) => {
        console.log(token)
        console.log(jwtDecode(token))
        localStorage.setItem('jwt', token)
        this.vhService.usuarioLogueado.emit(true)
        this.router.navigateByUrl('/')
      })
  }

}
