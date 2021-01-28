import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  isMaiorIdade = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required]], // nome: new FormControl
      idade: null,
      cidade: null,
      estado: null
    });
  }

  preencherFormulario() {
    this.formulario.patchValue({
      nome: 'Juliana',
      // idade: 10,
      cidade: 'sp',
      estado: 'sp'
    });
  }

  verificarIdade(){
    if (this.formulario.get('idade').value >= 18) {
      this.isMaiorIdade = true;
    }
  }

  enviarFormulario() {
    if (this.formulario.invalid) {
      return alert('Preencha todos os campos');
    }
    console.log(this.formulario.value);
  }
}
