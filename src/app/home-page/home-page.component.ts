import { Allenamento } from './../shared/allenamento.model';
import { AllenamentoService } from './../services/allenamento.service';
import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private allenamentoService: AllenamentoService) { }

  ngOnInit() {
    /*this.allenamentoService.getWorkOut().subscribe((data: Allenamento[]) => {
      this.allenamenti = data;
    });*/
  }



}
