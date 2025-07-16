import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DadosCadastroAgendamento } from '../interfaces/agendamento.model';

@Injectable({
  providedIn: 'root',
})
export class AgendamentoService {
  private readonly API = 'http://localhost:8080/agendamentos';

  constructor(private http: HttpClient) {}

  getListAgendamentos(): Observable<any[]> {
    return this.http.get<any[]>(this.API);
  }

  postAgendamentos(body: DadosCadastroAgendamento): Observable<any[]> {
    return this.http.post<any[]>(this.API, body);
  }
}
