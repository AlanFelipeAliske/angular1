import { Component } from '@angular/core';
import {Pessoa} from './pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular1';
  nome = 'Alan Felipe';
  nomes = ['Alan', 'Amanda', 'Aliske', 'josé'];
  idades = [12, 15, 20, 30, 60];
  primeiroNome = this.nomes[0];

  nomesArray = [
    new Pessoa(1, 26, 'Alan'),
    new Pessoa(2, 26, 'Mateus'),
    new Pessoa(3, 26, 'Igor'),
    new Pessoa(4, 12, 'John'),
    new Pessoa(5, 18, 'José'),
    //new Pessoa(6, 10, 'Jos'),
  ];
  nomePrincipal2 = this.nomesArray[0];
  avisoTest = true;
  avisoMsg = 'Atenção';
}
