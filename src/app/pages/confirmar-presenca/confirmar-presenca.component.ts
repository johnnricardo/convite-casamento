import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { ControllerService } from 'src/app/controller/controller.service';
import { ModalChooseComponent } from 'src/app/modal/modal-choose/modal-choose.component';
@Component({
  selector: 'app-confirmar-presenca',
  templateUrl: './confirmar-presenca.component.html',
  styleUrls: ['./confirmar-presenca.component.scss']

})
export class ConfirmarPresencaComponent implements OnInit {

  listaConvidados: Array<any> = []

  listaConvidadosFull: any

  listaConvidadosAfter: any = [{}]

  constructor(
    public dialog: MatDialog,
    private controllerService: ControllerService
    ) {}

  ngOnInit(): void {
    this.addList()

    this.ordenarPorNome();

    this.controllerService.listaInfo()
    // this.listaConvidadosFull = this.listaConvidados
  }

  ordenarPorNome() {
    
    this.listaConvidados.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  openDialog(index: number) {
    this.dialog.open(ModalChooseComponent,{
      width: '80vw'
    });

    this.listaConvidados[index].checked = true
    this.controllerService.NomeConvidado = this.listaConvidados[index].nome

  };

  inputChange  (event: string) {

    this.controllerService.search(event)
    this.addList()
    this.ordenarPorNome()
  }

  addList() {
    
    this.listaConvidados = this.controllerService.listaConvidados

  }

  

}