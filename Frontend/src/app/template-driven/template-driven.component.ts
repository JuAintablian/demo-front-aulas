import { Cadastro } from './../model/cadastro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  nomeTouched: boolean = false
  nomeValid: string = 'valid'

  cadastro: any = {
    nome: null,
    email: null
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formulario) {
    console.log(formulario)
    formulario.controls.touched === false? {nomeValid:'invalid'} : null
    console.log(formulario.value)
  }

}
