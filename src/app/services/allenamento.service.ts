import { environment } from './../../environments/environment';
import { Allenamento } from './../shared/allenamento.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllenamentoService {
  allenamento: Allenamento;
  constructor(private http: HttpClient) {}
  getWorkOut() {
    return this.http.get(environment.apiUrl + 'allenamenti');
  }
  saveWorkOut(workOut: Allenamento) {
    return this.http.post(environment.apiUrl + 'allenamenti', workOut);
  }
}
