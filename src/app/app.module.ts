import { CarouselModule } from 'primeng/carousel';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { EsercizioComponent } from './esercizio/esercizio.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import { AllenamentoComponent } from './allenamento/allenamento.component';
import {DropdownModule} from 'primeng/dropdown';
import { WorkOutComponent } from './work-out/work-out.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EsercizioComponent,
    AllenamentoComponent,
    WorkOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ToolbarModule,
    SidebarModule,
    DropdownModule,
    CarouselModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
