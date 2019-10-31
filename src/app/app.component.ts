import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef, private router: Router, private route: ActivatedRoute) {}
  title = 'WorkOut';
  display = false;
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
 }

 esercizio() {
  this.router.navigate(['/esercizi'], {relativeTo: this.route});
  this.display = false;
 }

 allenamento() {
  this.router.navigate(['/allenamenti'], {relativeTo: this.route});
  this.display = false;
 }

 home() {
  this.router.navigate(['/'], {relativeTo: this.route});
  this.display = false;
 }
}
