import { CarouselModule } from 'primeng/carousel';
import { Subscriber, Subscription } from 'rxjs';
import { EsercizioService } from './../services/esercizio.service';
import { Allenamento } from './../shared/allenamento.model';

import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AllenamentoService } from '../services/allenamento.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Esercizio } from '../shared/esercizio.model';
import { SelectItem } from 'primeng/api';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-allenamento',
  templateUrl: './allenamento.component.html',
  styleUrls: ['./allenamento.component.scss']
})
export class AllenamentoComponent implements OnInit {
  title = '';
  private subexe: Subscription;
  selectedId: Esercizio = {
    id: ''
  };
  displayDialog = false;
  selectedWorkout: Allenamento;
  modifica = false;
  display = false;
  exercise: Esercizio;
  gruppoMuscolare: string;
  gruppoMuscolaresearch: string;
  settimanasearch: number;
  ordine = 0;
  allenamenti: Allenamento[];
  workOut: Allenamento;
  esercizi: FormArray;
  selectedExe: Esercizio;
  allenamento;
  @ViewChild('esercizio', {static: true}) esercizio: ElementRef;
  esercizirepo: Esercizio[];
  esercizifilt: Esercizio[];

  constructor(
    private allenamentoService: AllenamentoService,
    private formBuilder: FormBuilder,
    private esercizioService: EsercizioService) {
    this.subexe = this.esercizioService.exe.subscribe(esercizi => {
      this.esercizirepo = esercizi;
      this.esercizifilt = this.esercizirepo;
    });
    this.esercizioService.getEsercizi();
    this.allenamentoService.getWorkOut().subscribe((alle: Allenamento[]) => {
      this.allenamenti = alle;
      console.log(this.allenamenti);
    });
    this.selectedWorkout = {esercizi: [], id: '', settimana: 0, gruppo_muscolare: ''};
  }

  ngOnInit() {
    this.allenamento = this.formBuilder.group({
      settimana: 0,
      gruppo_muscolare: '',
      esercizi: this.formBuilder.array([])
    });
  }
  modificaAllenamento() {
    this.modifica = true;
    this.title = 'Modifica Allenamento';
    this.display = true;
  }

  creaAllenamento() {
    this.allenamento.reset();
    if (this.esercizi) {
      this.esercizi.clear();
    }
    this.modifica = true;
    this.title = 'Inserisci Allenamento';
    this.display = true;
  }

  createEsercizio() {
    this.ordine = this.ordine + 1;
    const ese = this.selectedId.id;
    console.log(this.selectedId);
    return this.formBuilder.group({
      id: ese,
      ripetizioni: 0,
      serie: 0,
      riposo: 0,
      peso: null,
      ordine: this.ordine,
    });
  }

  addEsercizio(): void {
    this.esercizi = this.allenamento.get('esercizi') as FormArray;
    this.esercizi.push(this.createEsercizio());
  }

  onAddAllenamento() {
    console.log(this.allenamento.value);
    this.allenamentoService.saveWorkOut(this.allenamento.value).subscribe(e => {
        this.allenamentoService.getWorkOut().subscribe((alle: Allenamento[]) => {
          this.allenamenti = alle;
          console.log(this.allenamenti);
        });
      }
    );
  }

  filter() {
    this.esercizifilt = [];
    if (this.gruppoMuscolare === '') {
      this.esercizifilt = this.esercizirepo;
    } else {
      for (let i of this.esercizirepo) {
        if (this.gruppoMuscolare.includes(i.gruppo_muscolare)) {
          this.esercizifilt.push(i);
        }
      }
    }
  }
  onRowSelect(event) {
    this.displayDialog = true;
    this.selectedWorkout = event;
    console.log(event);
}

timer() {
  console.log();
}
}
