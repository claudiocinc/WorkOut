import { AllenamentoComponent } from './allenamento/allenamento.component';
import { EsercizioComponent } from './esercizio/esercizio.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'esercizi', component: EsercizioComponent},
  {path: 'allenamenti', component: AllenamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
