import { Esercizio } from './../shared/esercizio.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EsercizioService {

  constructor(private http: HttpClient) { }
  esercizi: Esercizio[];
  exe = new Subject<Esercizio[]>();

  getEsercizi() {
    this.http.get(environment.apiUrl + 'esercizi').subscribe((data: Esercizio[]) => {
      this.esercizi = data;
      this.exe.next(this.esercizi);
    });
  }

  insertEsercizio(esercizio: Esercizio) {
    return this.http.post(environment.apiUrl + 'esercizi', esercizio);
  }

  deleteEsercizio(eser: Esercizio) {
    return this.http.delete(environment.apiUrl + 'esercizi/' + eser.id);
  }
}
