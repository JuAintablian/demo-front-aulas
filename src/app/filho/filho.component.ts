import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  @Input() nome: string;
  @Output() evento = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  enviarEvento(){
    this.evento.emit("Evento Enviado")
  }

}
