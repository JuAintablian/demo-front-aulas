import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  nomeTwoBinding: string = "Rogério"
  nome: string = "Leonardo"

  constructor() { }

  ngOnInit(): void {
  }

  monstrarDataBinding(){
    console.log(this.nome)
  }

  monstrarTwoWayDataBinding() {
    console.log(this.nomeTwoBinding)
  }

}
