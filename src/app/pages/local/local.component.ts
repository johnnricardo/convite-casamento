import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent {

  constructor(
    private router: Router
  ) {}

  returnPageHome(){
    this.router.navigate([''])
  }
}
