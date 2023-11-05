import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControllerService } from 'src/app/controller/controller.service';

@Component({
  selector: 'app-confirmar-presente',
  templateUrl: './confirmar-presente.component.html',
  styleUrls: ['./confirmar-presente.component.scss']
})
export class ConfirmarPresenteComponent implements OnInit {
  
  constructor (
    public router: Router,
    private controllerService: ControllerService
    ) {}

  ngOnInit(): void {
    this.ordenarPorNome();
  }

  listaPresentes = [
    {nome: 'Travesseiro', checked: false},
    {nome: 'AirFryer', checked: false},
    {nome: 'Edredom', checked: false},
    {nome: 'Jogo de Lençol', checked: false},
    {nome: 'Manta Casal', checked: false},
    {nome: 'Ventilador', checked: false},
    {nome: 'Travessa de Vidro', checked: false},
    {nome: 'Conjunto de Sobremesa', checked: false},
    {nome: 'Microondas', checked: false},
    {nome: 'Toalha de Mesa', checked: false},
    {nome: 'Supla (Souplat)', checked: false},
    {nome: 'Bowl', checked: false},
    {nome: 'Jarra de Vidro', checked: false},
    {nome: 'Jogo de Xícara', checked: false},
    {nome: 'Misteira', checked: false},
    {nome: 'Liquidificador', checked: false},
    {nome: 'Jogo de Copo', checked: false},
    {nome: 'Vaso de decoração', checked: false},
    {nome: 'Jogo de Almofada', checked: false},
    {nome: 'Ferro de Passar Roupas', checked: false},
    {nome: 'Jogo de Toalhas', checked: false},
    {nome: 'Kit de Banheiro', checked: false},
    {nome: 'Varal Portátil', checked: false},
    
  ]

  ordenarPorNome() {
    this.listaPresentes.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  confirmar() {
    let presente1 = this.controllerService.presentes[0]
    let presente2 = this.controllerService.presentes[1]

    if (presente2) {
      const urlExterna = `https://api.whatsapp.com/send?phone=5528999013720&text=Ol%C3%A1,%20Jo%C3%A3o!%20Escolhi%20meu%20presente,%20pode%20riscar%20${presente1}%20e%20${presente2}%20da%20sua%20lista!`
      window.open(urlExterna, '_blank');
      this.router.navigate([''])
    } else if(presente1){
      const urlExterna = `https://api.whatsapp.com/send?phone=5528999013720&text=Ol%C3%A1,%20Jo%C3%A3o!%20Escolhi%20meu%20presente,%20pode%20riscar%20${presente1}%20da%20sua%20lista!`
      window.open(urlExterna, '_blank');
      this.router.navigate([''])
    } else {
      const urlExterna = `https://api.whatsapp.com/send?phone=5528999067634&text=Ol%C3%A1%2C%20Jo%C3%A3o!%20Vou%20te%20enviar%20meu%20presente%20por%20pix%21`
      window.open(urlExterna, '_blank');
      this.router.navigate([''])
    }


    

    }  

  marcarCheckBox(i: number) {
    this.controllerService.anexarPresente( this.listaPresentes[i].nome)
    }
  }
