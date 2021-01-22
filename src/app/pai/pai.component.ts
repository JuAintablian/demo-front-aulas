import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  nomeSaindoDoPai: string = "Juliana"

  nome: string;
  valor: number;
  lista2: Array<any>
  condicao: boolean = false;

  lista = [
    {nome: "Ana", id: 1, idade: 12, precoProduto: 5.52},
    {nome: "Theo", id: 2, idade: 8, precoProduto: 6.15}
  ];

  constructor() { }

  ngOnInit(): void {
    const result = this.lista.filter(valor => valor.nome != "Theo")
    console.log(result);
    
  }

  receberEvento(evento){
    console.log(evento);
  }

  mudarEstado(){
    this.condicao = !this.condicao;
  }

}
