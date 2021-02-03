import { CadastroService } from './../core/cadastro/cadastro.service';
import { Cadastro } from './../model/cadastro';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  isMaiorIdade = false;
  cadastro: Cadastro[] = [];

  constructor(private formBuilder: FormBuilder, private cadastroService: CadastroService) { }

  ngOnInit(): void {
    this.createForm();
    console.log(this.formulario)
    this.resgatarFormulario();
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required]], // nome: new FormControl
      idade: null,
      cidade: null,
      estado: null
    });
  }

  resgatarFormulario() {
    this.cadastroService.getPessoa().subscribe((data: Cadastro[]) => {
      this.cadastro = [...data];
      this.preencherFormulario();
    })
  }

  preencherFormulario() {
    this.formulario.patchValue({
      nome: this.cadastro[0].nome,
      idade: this.cadastro[0].idade,
      cidade: this.cadastro[0].cidade,
      estado: this.cadastro[0].estado
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
    }else{
      this.cadastroService.postPessoa(this.formulario.value).subscribe(data => {
        console.log("Cadastro Efetuado com Sucesso!!");
      })
    }
  }

  excluir(id: number) {
    this.cadastroService.deletePessoa(id).subscribe(data => {
      console.log(data);
    })
  }
}
