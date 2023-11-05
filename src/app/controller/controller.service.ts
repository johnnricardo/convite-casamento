import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService implements OnInit {
  public NomeConvidado: string = ''
  public presentes: Array<string> =  []
  constructor() { }
  ngOnInit(): void {
    this.ordenarPorNome();
  }

  ordenarPorNome() {
    
    this.listaConvidados.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  listaConvidados = [
    {nome: 'ray', checked: false},
    {nome: 'brenda', checked: false},
    {nome: 'geovania', checked: false},
    {nome: 'gutierryz Romanelli', checked: false},
    {nome: 'geilson Meireles', checked: false},
    {nome: 'marcia Meireles', checked: false},
    {nome: 'diovani', checked: false},
    {nome: 'silvia', checked: false},
    {nome: 'amanda', checked: false},
    {nome: 'daniel', checked: false},
    {nome: 'thamires', checked: false},
    {nome: 'joão Pedro', checked: false},
    {nome: 'davi Miguel', checked: false},
    {nome: 'fendo Bertolaine', checked: false},
    {nome: 'solange Bertolaine', checked: false},
    {nome: 'lucas', checked: false},
    {nome: 'thais', checked: false},
    {nome: 'paulo', checked: false},
    {nome: 'nadiene', checked: false},
    {nome: 'luisa', checked: false},
    {nome: 'larissa', checked: false},
    {nome: 'sabrina', checked: false},
    {nome: 'dona Santa', checked: false},
    {nome: 'daniel (avô)', checked: false},
    {nome: 'dona Santa', checked: false},
    {nome: 'marcia', checked: false},
    {nome: 'marcelo', checked: false},
    {nome: 'denilton', checked: false},
    {nome: 'renilda', checked: false},
    {nome: 'samea', checked: false},
    {nome: 'wellington', checked: false},
    {nome: 'geni', checked: false},
    {nome: 'walter', checked: false},
    {nome: 'ilma', checked: false},
    {nome: 'vanil', checked: false},
    {nome: 'paulo Sergio', checked: false},
    {nome: 'neuzelina', checked: false},
    {nome: 'karolyne', checked: false},
    {nome: 'william', checked: false},
    {nome: 'queren', checked: false},
    {nome: 'lucas Geri', checked: false},
    {nome: 'josiel', checked: false},
    {nome: 'priscila', checked: false},
    {nome: 'marcelo (raquel) ', checked: false},
    {nome: 'raquel', checked: false},
    {nome: 'darlan', checked: false},
    {nome: 'romeu', checked: false},
    {nome: 'rute', checked: false},
    {nome: 'samuel', checked: false},
    {nome: 'eduardo Bigue', checked: false},
    {nome: 'dayane', checked: false},
    {nome: 'paulinha', checked: false},
    {nome: 'matheus Pimenta', checked: false},
    {nome: 'danielle Alves', checked: false},
    {nome: 'beatriz Monteiro', checked: false},
    {nome: 'carol Monteiro', checked: false},
    {nome: 'simone Monteiro', checked: false},
    {nome: 'alef', checked: false},
    {nome: 'renata', checked: false},
    {nome: 'gilvan', checked: false},
    {nome: 'lianara', checked: false},
    {nome: 'marcela', checked: false},
    {nome: 'luiz', checked: false},
    {nome: 'mariana', checked: false},
    {nome: 'anna Júlya', checked: false},
    {nome: 'yuri', checked: false},
    {nome: 'matheus', checked: false},
    {nome: 'roberta', checked: false},
    {nome: 'miqueias', checked: false},
    {nome: 'ezequiel', checked: false},
    {nome: 'gabriel Lima', checked: false},
    {nome: 'eduarda Lima', checked: false},
    {nome: 'elizene', checked: false},
    {nome: 'odomar', checked: false},
    {nome: 'gabriel Souza', checked: false},
    {nome: 'sara Alves', checked: false},
    {nome: 'juan', checked: false},
    {nome: 'amanda Monteiro', checked: false},
    {nome: 'gilson', checked: false},
    {nome: 'andreia', checked: false},
    {nome: 'sarah Batista', checked: false},
    {nome: 'rafael Alexandrino', checked: false},
    {nome: 'rebeca Santos', checked: false},
    {nome: 'pablo Lopes', checked: false},
    {nome: 'keithanne Lopes', checked: false},
    {nome: 'cristiano', checked: false},
    {nome: 'juliana', checked: false},
    {nome: 'marlene', checked: false},
    {nome: 'isabelly', checked: false},
    {nome: 'rosalina', checked: false},
    {nome: 'laísa', checked: false},
    {nome: 'lucia', checked: false},
    {nome: 'gustavo Ribeiro', checked: false},
    {nome: 'vivia Lima', checked: false},
    {nome: 'marcos (vivia)', checked: false},
    {nome: 'marceli Tomazeli', checked: false},
    {nome: 'thamirys Lima', checked: false},
    {nome: 'hugo Silva', checked: false},
    {nome: 'leonardo Bigue', checked: false},
    {nome: 'hosana', checked: false},
    {nome: 'caroline Bovial', checked: false},
    {nome: 'thayane', checked: false},
    {nome: 'igor', checked: false},
    {nome: 'ester', checked: false},
    {nome: 'vania', checked: false},
    {nome: 'alice', checked: false},
    {nome: 'tomaz', checked: false},
    {nome: 'gabriel Ramos (dev)', checked: false},
    {nome: 'felipe (dev)', checked: false},
    {nome: 'raylane', checked: false},
    {nome: 'julllya Bertine', checked: false},
    {nome: 'dona Ana', checked: false},
    
  ]

  listaConvidadosFull = [
    {nome: 'ray', checked: false},
    {nome: 'brenda', checked: false},
    {nome: 'geovania', checked: false},
    {nome: 'gutierryz Romanelli', checked: false},
    {nome: 'geilson Meireles', checked: false},
    {nome: 'marcia Meireles', checked: false},
    {nome: 'diovani', checked: false},
    {nome: 'silvia', checked: false},
    {nome: 'amanda', checked: false},
    {nome: 'daniel', checked: false},
    {nome: 'thamires', checked: false},
    {nome: 'joão Pedro', checked: false},
    {nome: 'davi Miguel', checked: false},
    {nome: 'fendo Bertolaine', checked: false},
    {nome: 'solange Bertolaine', checked: false},
    {nome: 'lucas', checked: false},
    {nome: 'thais', checked: false},
    {nome: 'paulo', checked: false},
    {nome: 'nadiene', checked: false},
    {nome: 'luisa', checked: false},
    {nome: 'larissa', checked: false},
    {nome: 'sabrina', checked: false},
    {nome: 'dona Santa', checked: false},
    {nome: 'daniel (avô)', checked: false},
    {nome: 'dona Santa', checked: false},
    {nome: 'marcia', checked: false},
    {nome: 'marcelo', checked: false},
    {nome: 'denilton', checked: false},
    {nome: 'renilda', checked: false},
    {nome: 'samea', checked: false},
    {nome: 'wellington', checked: false},
    {nome: 'geni', checked: false},
    {nome: 'walter', checked: false},
    {nome: 'ilma', checked: false},
    {nome: 'vanil', checked: false},
    {nome: 'paulo Sergio', checked: false},
    {nome: 'neuzelina', checked: false},
    {nome: 'karolyne', checked: false},
    {nome: 'william', checked: false},
    {nome: 'queren', checked: false},
    {nome: 'lucas Geri', checked: false},
    {nome: 'josiel', checked: false},
    {nome: 'priscila', checked: false},
    {nome: 'marcelo (raquel) ', checked: false},
    {nome: 'raquel', checked: false},
    {nome: 'darlan', checked: false},
    {nome: 'romeu', checked: false},
    {nome: 'rute', checked: false},
    {nome: 'samuel', checked: false},
    {nome: 'eduardo Bigue', checked: false},
    {nome: 'dayane', checked: false},
    {nome: 'paulinha', checked: false},
    {nome: 'matheus Pimenta', checked: false},
    {nome: 'danielle Alves', checked: false},
    {nome: 'beatriz Monteiro', checked: false},
    {nome: 'carol Monteiro', checked: false},
    {nome: 'simone Monteiro', checked: false},
    {nome: 'alef', checked: false},
    {nome: 'renata', checked: false},
    {nome: 'gilvan', checked: false},
    {nome: 'lianara', checked: false},
    {nome: 'marcela', checked: false},
    {nome: 'luiz', checked: false},
    {nome: 'mariana', checked: false},
    {nome: 'anna Júlya', checked: false},
    {nome: 'yuri', checked: false},
    {nome: 'matheus', checked: false},
    {nome: 'roberta', checked: false},
    {nome: 'miqueias', checked: false},
    {nome: 'ezequiel', checked: false},
    {nome: 'gabriel Lima', checked: false},
    {nome: 'eduarda Lima', checked: false},
    {nome: 'elizene', checked: false},
    {nome: 'odomar', checked: false},
    {nome: 'gabriel Souza', checked: false},
    {nome: 'sara Alves', checked: false},
    {nome: 'juan', checked: false},
    {nome: 'amanda Monteiro', checked: false},
    {nome: 'gilson', checked: false},
    {nome: 'andreia', checked: false},
    {nome: 'sarah Batista', checked: false},
    {nome: 'rafael Alexandrino', checked: false},
    {nome: 'rebeca Santos', checked: false},
    {nome: 'pablo Lopes', checked: false},
    {nome: 'keithanne Lopes', checked: false},
    {nome: 'cristiano', checked: false},
    {nome: 'juliana', checked: false},
    {nome: 'marlene', checked: false},
    {nome: 'isabelly', checked: false},
    {nome: 'rosalina', checked: false},
    {nome: 'laísa', checked: false},
    {nome: 'lucia', checked: false},
    {nome: 'gustavo Ribeiro', checked: false},
    {nome: 'vivia Lima', checked: false},
    {nome: 'marcos (vivia)', checked: false},
    {nome: 'marceli Tomazeli', checked: false},
    {nome: 'thamirys Lima', checked: false},
    {nome: 'hugo Silva', checked: false},
    {nome: 'leonardo Bigue', checked: false},
    {nome: 'hosana', checked: false},
    {nome: 'caroline Bovial', checked: false},
    {nome: 'thayane', checked: false},
    {nome: 'igor', checked: false},
    {nome: 'ester', checked: false},
    {nome: 'vania', checked: false},
    {nome: 'alice', checked: false},
    {nome: 'tomaz', checked: false},
    {nome: 'gabriel Ramos (dev)', checked: false},
    {nome: 'felipe (dev)', checked: false},
    {nome: 'raylane', checked: false},
    {nome: 'julllya Bertine', checked: false},
    {nome: 'dona Ana', checked: false},
    
  ]

  listaConvidadosAfter: Array<any> = []

  anexarPresente(nome: string) {
    let presente = nome
    let controler = false
    
    for (let i = 0; i < presente.length; i++){
      if(this.presentes[i] === nome){
        this.presentes.splice(i, 1)
        i = 1000
        controler = true
      } 
    }

    if( controler === false) {
      this.presentes.push(nome)
    }

  }
  
  search (dados: string) {

    dados = String(dados)

    for ( let i = 0; i < 112 ; i++) {
      console.log(`passei em`)
      console.log(this.listaConvidadosFull[i].nome)
      if (this.listaConvidadosFull[i].nome.startsWith(dados.toLowerCase())) {
        this.listaConvidadosAfter.push(this.listaConvidadosFull[i])
        console.log(`passou no teste`)
      }
    }
    this.listaConvidados = this.listaConvidadosAfter
    this.listaConvidadosAfter = []

    console.log(this.listaConvidadosAfter)
    return true

    }
}

