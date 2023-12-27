import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ControllerService  {
  public NomeConvidado: string = ''
  public presentes: Array<string> =  []
  constructor() { }
 

  listaConvidados = [
    {nome: 'ray Cabral', checked: true}, //
    {nome: 'brenda', checked: true}, //
    {nome: 'geovania', checked: true}, //
    {nome: 'gutierryz Romanelli', checked: true}, //
    {nome: 'geilson Meireles', checked: true}, //
    {nome: 'marcia Meireles', checked: true}, //
    {nome: 'diovani Monteiro', checked: true}, //
    {nome: 'silvia Monteiro', checked: true}, //
    {nome: 'amanda Monteiro', checked: true}, //
    {nome: 'daniel Fagundes', checked: true}, //
    {nome: 'thamires', checked: true}, //
    {nome: 'joão Pedro', checked: true}, //
    {nome: 'davi Miguel', checked: true}, //
    {nome: 'fendo Bertolaine', checked: false}, //
    {nome: 'solange Bertolaine', checked: false}, //
    {nome: 'lucas Monteiro', checked: false}, //
    {nome: 'thais', checked: false}, //
    {nome: 'paulo Fagundes', checked: false}, //
    {nome: 'nadiene', checked: false}, //
    {nome: 'luisa', checked: false}, //
    {nome: 'larissa', checked: false}, //
    {nome: 'sabrina Fagundes', checked: false}, //
    {nome: 'dona Santa (pai)', checked: false}, //
    {nome: 'daniel (avô)', checked: false}, //
    {nome: 'dona Santa (mãe)', checked: false},  //
    {nome: 'marcia Fernanda Bayerl', checked: false}, //
    {nome: 'marcelo', checked: false}, //
    {nome: 'denilton', checked: true}, //
    {nome: 'renilda', checked: true}, //
    {nome: 'samea', checked: true}, //
    {nome: 'wellington', checked: true}, //
    {nome: 'geni', checked: false}, //
    {nome: 'walter', checked: false}, //
    {nome: 'ilma', checked: true},
    {nome: 'vanil', checked: true},
    {nome: 'paulo Sergio', checked: true},
    {nome: 'neuzelina', checked: true},
    {nome: 'karolyne', checked: true},
    {nome: 'william', checked: true},
    {nome: 'queren', checked: false}, //
    {nome: 'lucas Geri', checked: false}, //
    {nome: 'josiel', checked: false}, //
    {nome: 'priscila', checked: false}, //
    {nome: 'marcelo (raquel) ', checked: true}, //
    {nome: 'raquel', checked: true}, //
    {nome: 'darlan', checked: true}, //
    {nome: 'romeu', checked: false}, //
    {nome: 'rute', checked: false}, //
    {nome: 'samuel', checked: false}, //
    {nome: 'eduardo Bigue', checked: false},
    {nome: 'dayane', checked: false},
    {nome: 'paulinha', checked: false}, //
    {nome: 'matheus Pimenta', checked: false}, //
    {nome: 'danielle Alves', checked: true}, //
    {nome: 'beatriz Monteiro', checked: true}, //
    {nome: 'carol Monteiro', checked: true}, //
    {nome: 'simone Monteiro', checked: true}, //
    {nome: 'alefe', checked: true}, //
    {nome: 'renata', checked: true}, //
    {nome: 'gilvan', checked: true}, //
    {nome: 'marcela Souza', checked: true}, //
    {nome: 'luiz (marcela)', checked: true}, //
    {nome: 'mariana', checked: true}, //
    {nome: 'anna Júlya', checked: true}, //
    {nome: 'yuri', checked: true}, //
    {nome: 'matheus Jardim', checked: true}, //
    {nome: 'roberta Jardim', checked: true}, //
    {nome: 'miqueias', checked: true}, //
    {nome: 'ezequiel', checked: true},
    {nome: 'gabriel Lima', checked: false},
    {nome: 'eduarda Lima', checked: false},
    {nome: 'elizene', checked: false},
    {nome: 'odomar', checked: false},
    {nome: 'gabriel Souza', checked: false}, //
    {nome: 'juan Quirino', checked: false}, //
    {nome: 'gilson Batista', checked: true}, //
    {nome: 'andreia Batista', checked: true}, //
    {nome: 'sarah Batista', checked: true}, //
    {nome: 'rafael Alexandrino', checked: false}, //
    {nome: 'pablo Lopes', checked: true},
    {nome: 'keithanne Lopes', checked: true},
    {nome: 'cristiano Santos', checked: false},
    {nome: 'juliana Bagatol', checked: false},
    {nome: 'marlene', checked: false},
    {nome: 'isabelly', checked: true},
    {nome: 'rosalina', checked: false},
    {nome: 'laísa', checked: true},
    {nome: 'lucia (gazeta)', checked: true},
    {nome: 'gustavo Ribeiro', checked: true},
    {nome: 'vivia Lima', checked: false},
    {nome: 'marceli Tomazeli', checked: false},
    {nome: 'thamirys Lima', checked: false},
    {nome: 'leonardo Bigue', checked: true},
    {nome: 'hosana', checked: true},
    {nome: 'thayane', checked: true},
    {nome: 'igor', checked: true},
    {nome: 'ester Boleli', checked: true},
    {nome: 'vania Boleli', checked: true},
    {nome: 'alice (gazeta)', checked: true},
    {nome: 'tomaz (gazeta)', checked: false},
    {nome: 'gabriel Ramos (dev)', checked: false},
    {nome: 'felipe (dev)', checked: false},
    {nome: 'raylane Cabral', checked: true},
    {nome: 'julllya Bertine', checked: true},
    {nome: 'dona Ana', checked: false},
    {nome: 'Pedro Debona', checked: false},
    { nome: 'Robinho Nazzaré', checked: false },
    { nome: 'Marina', checked: false },
    { nome: 'Alice', checked: false },
    { nome: 'Daniela Mapelli', checked: false },
    { nome: 'Juliana Mapelli', checked: false },
    { nome: 'Malon', checked: false },
    { nome: 'Letícia Karolyne', checked: false },
    { nome: 'Bruno Albano', checked: false },

  ]

  listaConvidadosFull = [
    {nome: 'ray Cabral', checked: true},
    {nome: 'brenda', checked: true},
    {nome: 'geovania', checked: true},
    {nome: 'gutierryz Romanelli', checked: true},
    {nome: 'geilson Meireles', checked: true},
    {nome: 'marcia Meireles', checked: true},
    {nome: 'diovani Monteiro', checked: true},
    {nome: 'silvia Monteiro', checked: true},
    {nome: 'amanda Monteiro', checked: true},
    {nome: 'daniel Fagundes', checked: false},
    {nome: 'thamires', checked: false},
    {nome: 'joão Pedro', checked: false},
    {nome: 'davi Miguel', checked: false},
    {nome: 'fendo Bertolaine', checked: false},
    {nome: 'solange Bertolaine', checked: false},
    {nome: 'lucas Monteiro', checked: false},
    {nome: 'thais', checked: false},
    {nome: 'paulo Fagundes', checked: false},
    {nome: 'nadiene', checked: false},
    {nome: 'luisa', checked: false},
    {nome: 'larissa', checked: false},
    {nome: 'sabrina Fagundes', checked: false},
    {nome: 'dona Santa (pai)', checked: false},
    {nome: 'daniel (avô)', checked: false},
    {nome: 'dona Santa (mãe)', checked: false},
    {nome: 'marcia Fernanda Bayerl', checked: false},
    {nome: 'marcelo', checked: false},
    {nome: 'denilton', checked: true},
    {nome: 'renilda', checked: true},
    {nome: 'samea', checked: true},
    {nome: 'wellington', checked: true},
    {nome: 'geni', checked: false},
    {nome: 'walter', checked: false},
    {nome: 'ilma', checked: false},
    {nome: 'vanil', checked: false},
    {nome: 'paulo Sergio', checked: false},
    {nome: 'neuzelina', checked: false},
    {nome: 'karolyne', checked: false},
    {nome: 'william', checked: false},
    {nome: 'queren', checked: true},
    {nome: 'lucas Geri', checked: true},
    {nome: 'josiel', checked: false},
    {nome: 'priscila', checked: false},
    {nome: 'marcelo (raquel) ', checked: true},
    {nome: 'raquel', checked: true},
    {nome: 'darlan', checked: true},
    {nome: 'romeu', checked: false},
    {nome: 'rute', checked: false},
    {nome: 'samuel', checked: false},
    {nome: 'eduardo Bigue', checked: false},
    {nome: 'dayane', checked: false},
    {nome: 'paulinha', checked: false},
    {nome: 'matheus Pimenta', checked: false},
    {nome: 'danielle Alves', checked: false},
    {nome: 'beatriz Monteiro', checked: true},
    {nome: 'carol Monteiro', checked: true},
    {nome: 'simone Monteiro', checked: true},
    {nome: 'alef', checked: true},
    {nome: 'renata', checked: false},
    {nome: 'gilvan', checked: false},
    {nome: 'marcela Souza', checked: false},
    {nome: 'luiz (marcela)', checked: false},
    {nome: 'mariana', checked: false},
    {nome: 'anna Júlya', checked: true},
    {nome: 'yuri', checked: true},
    {nome: 'matheus Jardim', checked: false},
    {nome: 'roberta Jardim', checked: false},
    {nome: 'miqueias', checked: false},
    {nome: 'ezequiel', checked: false},
    {nome: 'gabriel Lima', checked: false},
    {nome: 'eduarda Lima', checked: false},
    {nome: 'elizene', checked: false},
    {nome: 'odomar', checked: false},
    {nome: 'gabriel Souza', checked: false},
    {nome: 'juan Quirino', checked: false},
    {nome: 'gilson Batista', checked: false},
    {nome: 'andreia Batista', checked: false},
    {nome: 'sarah Batista', checked: false},
    {nome: 'rafael Alexandrino', checked: false},
    {nome: 'pablo Lopes', checked: false},
    {nome: 'keithanne Lopes', checked: false},
    {nome: 'cristiano Santos', checked: false},
    {nome: 'juliana Bagatol', checked: false},
    {nome: 'marlene', checked: false},
    {nome: 'isabelly', checked: true},
    {nome: 'rosalina', checked: false},
    {nome: 'laísa', checked: true},
    {nome: 'lucia (gazeta)', checked: false},
    {nome: 'gustavo Ribeiro', checked: false},
    {nome: 'vivia Lima', checked: false},
    {nome: 'marceli Tomazeli', checked: false},
    {nome: 'thamirys Lima', checked: false},
    {nome: 'leonardo Bigue', checked: true},
    {nome: 'hosana', checked: true},
    {nome: 'thayane', checked: true},
    {nome: 'igor', checked: true},
    {nome: 'ester Boleli', checked: false},
    {nome: 'vania Boleli', checked: false},
    {nome: 'alice (gazeta)', checked: true},
    {nome: 'tomaz (gazeta)', checked: false},
    {nome: 'gabriel Ramos (dev)', checked: false},
    {nome: 'felipe (dev)', checked: false},
    {nome: 'raylane Cabral', checked: false},
    {nome: 'julllya Bertine', checked: false},
    {nome: 'dona Ana', checked: false},
    {nome: 'Pedro Debona', checked: false},
    { nome: 'Robinho Nazzaré', checked: false },
    { nome: 'Marina', checked: false },
    { nome: 'Alice', checked: false },
    { nome: 'Daniela Mapelli', checked: false },
    { nome: 'Juliana Mapelli', checked: false },
    { nome: 'Malon', checked: false },
    { nome: 'Letícia Karolyne', checked: false },
    { nome: 'Bruno Albano', checked: false },

  ]

  listaConvidadosAfter: Array<any> = []



  search (dados: string) {

    dados = String(dados)

    for ( let i = 0; i < this.listaConvidadosFull.length ; i++) {
      if (this.listaConvidadosFull[i].nome.startsWith(dados.toLowerCase())) {
        this.listaConvidadosAfter.push(this.listaConvidadosFull[i])
      }
    }
    this.listaConvidados = this.listaConvidadosAfter
    this.listaConvidadosAfter = []

    return true

    }

  listaInfo() {

    let confirmados: number = 0

    for(let i = 0; i < this.listaConvidados.length; i++){
      if(this.listaConvidados[i].checked){
        confirmados += 1
      }
    }
    
    
    console.log('temos', this.listaConvidados.length, 'convidados na lista')
    console.log('convidados confirmados:', confirmados)
  }
}

