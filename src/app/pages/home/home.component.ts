import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor (private router : Router) {}

  navigateConfirmarPresenca(){
    this.router.navigate(['confirmar'])
  }

  navigateLocal() {
    this.router.navigate(['local'])
  }

  navigatePresente(){
    this.router.navigate(['presente'])
  }
}
