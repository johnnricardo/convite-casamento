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
    {nome: 'Travesseiro', checked: false, confirmado: false},
    {nome: 'AirFryer', checked: false, confirmado: false },
    {nome: 'Edredom', checked: false, confirmado: false },
    {nome: 'Jogo de Lençol', checked: false, confirmado: false },
    {nome: 'Manta Casal', checked: false, confirmado: false },
    {nome: 'Ventilador', checked: false, confirmado: false },
    {nome: 'Travessa de Vidro', checked: false, confirmado: false },
    {nome: 'Conjunto de Sobremesa', checked: false, confirmado: false },
    {nome: 'Microondas', checked: false, confirmado: false },
    {nome: 'Toalha de Mesa', checked: false, confirmado: false },
    {nome: 'Supla (Souplat)', checked: false, confirmado: false },
    {nome: 'Bowl', checked: false, confirmado: false },
    {nome: 'Jarra de Vidro', checked: false, confirmado: false },
    {nome: 'Jogo de Xícara', checked: false, confirmado: false },
    {nome: 'Misteira', checked: false, confirmado: false },
    {nome: 'Liquidificador', checked: false, confirmado: false },
    {nome: 'Jogo de Copo', checked: false, confirmado: false },
    {nome: 'Vaso de decoração', checked: false, confirmado: false },
    {nome: 'Jogo de Almofada', checked: false, confirmado: false },
    {nome: 'Ferro de Passar Roupas', checked: false, confirmado: false },
    {nome: 'Jogo de Toalhas', checked: false, confirmado: false },
    {nome: 'Kit de Banheiro', checked: false, confirmado: false },
    {nome: 'Varal Portátil', checked: false, confirmado: false },
    
  ]

  ordenarPorNome() {
    this.listaPresentes.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  confirmar() {

  let presentesMarcados: Array<string> = [ ]

    for(let i = 0; i < this.listaPresentes.length; i++) {
      if (this.listaPresentes[i].checked == true) {
        presentesMarcados.push(this.listaPresentes[i].nome) 
      }
    }

    

    if (presentesMarcados[1]) {
      const urlExterna = `https://api.whatsapp.com/send?phone=5528999013720&text=Ol%C3%A1,%20Giovanna!%20Escolhi%20meu%20presente,%20pode%20riscar%20${presentesMarcados[0]}%20e%20${presentesMarcados[1]}%20da%20sua%20lista!`
      window.open(urlExterna, '_blank');
      this.router.navigate([''])
    } else if(presentesMarcados[0]){
      const urlExterna = `https://api.whatsapp.com/send?phone=5528999013720&text=Ol%C3%A1,%20Giovanna!%20Escolhi%20meu%20presente,%20pode%20riscar%20${presentesMarcados[0]}%20da%20sua%20lista!`
      window.open(urlExterna, '_blank');
      this.router.navigate([''])
    } else {
      const urlExterna = `https://api.whatsapp.com/send?phone=5528999067634&text=Ol%C3%A1%2C%20Giovanna!%20Vou%20te%20enviar%20meu%20presente%20por%20pix%21`
      window.open(urlExterna, '_blank');
       this.router.navigate([''])
     }


    

    }  

  marcarCheckBox(i: number) {

    this.listaPresentes[i].checked = !this.listaPresentes[i].checked
    //this.controllerService.anexarPresente( this.listaPresentes[i].nome)
    }
  }
