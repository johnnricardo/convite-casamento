import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ControllerService } from 'src/app/controller/controller.service';

@Component({
  selector: 'app-modal-choose',
  templateUrl: './modal-choose.component.html',
  styleUrls: ['./modal-choose.component.scss']
})
export class ModalChooseComponent {

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<ModalChooseComponent>,
    private controllerService: ControllerService
    ) {}

  navigateConfirmarPresente() {
    this.router.navigate(['presente'])
    this.dialogRef.close();
    
  }

  navigateHome() {
    this.dialogRef.close();
    //console.log(this.controllerService.NomeConvidado)

    const urlExterna = `https://api.whatsapp.com/send?phone=5528999013720&text=Ol%C3%A1%2C%20Giovanna!%20Acabei%20de%20confirmar%20minha%20presen%C3%A7a%20no%20seu%20casamento%21`
      window.open(urlExterna, '_blank');
      this.router.navigate([''])

    //alert(`Obrigado, ${this.controllerService.NomeConvidado}! Sua presença foi confirmada com sucesso!`)
  }
}
