import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-um',
  templateUrl: './componente-um.component.html',
  styleUrls: ['./componente-um.component.css']
})
export class ComponenteUmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('iniciou');
    this.funcao();
  }

  funcao() {
    const variavel = 0;
    console.log('teste');
    console.log(variavel);
  }

}
