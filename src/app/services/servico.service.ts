import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servico } from '../interfaces/servico.model';

@Injectable({
  providedIn: 'root',
})
export class ServicoService {
  private readonly API = 'http://localhost:8080/funcionarios';

  constructor(private http: HttpClient) {}

  getListServico(): Observable<Servico[]> {
    return this.http.get<Servico[]>('http://localhost:8080/servicos');
  }
}
