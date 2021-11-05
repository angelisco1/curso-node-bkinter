import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VendehumosService } from '../vendehumos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private vhService: VendehumosService,
    private router: Router
  ) {

    this.formulario = new FormGroup({
      nombre: new FormControl('Vendehumo ', Validators.required),
      descripcion: new FormControl(''),
      categoria: new FormControl('', Validators.required)
    })

  }

  guardar() {
    console.log(this.formulario.value)
    this.vhService.createVendehumos(this.formulario.value)
      .subscribe((datos: any) => {
        //console.log(datos)
        this.router.navigateByUrl('/')
      })
  }

  ngOnInit(): void {
  }

  setCategoria(event: any) {
    const categoria = event.target.value;
    this.formulario.controls['categoria'].setValue(categoria)
  }
}
