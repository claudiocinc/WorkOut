import { EsercizioService } from './../services/esercizio.service';
import { Component, OnInit } from '@angular/core';
import { Esercizio } from '../shared/esercizio.model';
import { FormBuilder } from '@angular/forms';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-esercizio',
  templateUrl: './esercizio.component.html',
  styleUrls: ['./esercizio.component.scss']
})
export class EsercizioComponent implements OnInit {
  esercizio;
  exercises: Esercizio[] = [];
  private subexe: Subscription;
  show = false;
  modifica = false;
  title = '';
  id = '';
  tipologia = '';
  gruppo_muscolare = '';
  constructor(private esercizioService: EsercizioService, private formBuilder: FormBuilder) {
    this.subexe = this.esercizioService.exe.subscribe(esercizi => {
      this.exercises = esercizi;
    });
    this.esercizioService.getEsercizi();
  }

  ngOnInit() {
    this.esercizio = this.formBuilder.group({
      id: '',
      tipologia: '',
      gruppo_muscolare: ''
    });
  }

  delete(esercizio: Esercizio) {
    console.log(esercizio);
    this.esercizioService.deleteEsercizio(esercizio).subscribe(result => {
      console.log(result);
      this.esercizioService.getEsercizi();
    });
  }

  onCreate() {
    this.modifica = false;
    this.show = true;
    this.title = 'Inserisci esercizio';
    this.id = '';
  }

  onModify(esercizio: Esercizio) {
    this.modifica = true;
    this.show = true;
    this.title = 'Modifica esercizio';
    this.id = esercizio.id;
    this.gruppo_muscolare = esercizio.gruppo_muscolare;
  }

  onSubmit(esercizio) {
    esercizio.label = esercizio.id;
    esercizio.value = esercizio.id;
    if (!this.modifica) {
    this.esercizioService.insertEsercizio(esercizio).subscribe(result => {
      console.log(result);
      this.esercizioService.getEsercizi();
    });
  } else {

  }
    this.show = false;
  }

}
