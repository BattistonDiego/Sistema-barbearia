import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  private readonly API = 'http://localhost:8080/funcionarios';

  constructor(private http: HttpClient) {}
}
