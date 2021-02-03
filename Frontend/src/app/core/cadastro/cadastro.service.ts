import { Cadastro } from './../../model/cadastro';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { subscribeOn, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  URL = "http://localhost:3000/pessoa"

  constructor(private httpClient: HttpClient) { }

  getPessoa() {
    return this.httpClient.get(this.URL).pipe(take(1));
  }
  
  postPessoa(cad: Cadastro) {
    return this.httpClient.post(this.URL,cad).pipe(take(1))
  }

  deletePessoa(id: number) {
    return this.httpClient.delete(`${this.URL}/${id}`).pipe(take(1))
  }

}
