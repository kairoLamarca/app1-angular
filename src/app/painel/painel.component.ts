import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:';
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;

  public tentativas: number = 3;

  constructor() {
    this.atualizaRodada();
    //this.rodadaFrase = this.frases[this.rodada];
    //console.log(this.rodadaFrase)
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    //console.log(this.tentativas);
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta');

      //trocar pergunta da rodada
      this.rodada++;

      this.progresso = this.progresso + (100 / this.frases.length);

      //console.log(this.progresso);

      //console.log(this.rodada);
      //atualiza o objeto rodadaFrase
      //this.rodadaFrase = this.frases[this.rodada];
      this.atualizaRodada();

      //console.log(this.rodadaFrase);

    } else {
      //alert('A tradução está errada');
      //decrementar tentativas
      this.tentativas--;

      //console.log(this.tentativas);
      if (this.tentativas === -1) {
        alert('Você perdeu todas as tentativas');
      }
    }
    //console.log(this.tentativas);
  }

  public atualizaRodada(): void {
    //define a frase da rodada com base em alguma lógica
    this.rodadaFrase = this.frases[this.rodada];

    //limpar resposta
    this.resposta = '';
  }
}
