import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  private readonly API = 'http://localhost:8080/funcionarios';

  constructor(private http: HttpClient) {}

  getListFuncionarios(): Observable<any[]> {
    return this.http.get<any[]>(this.API);
  }
}
