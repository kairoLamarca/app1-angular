import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//tag que esta no index, que é onde vai incluir os componentes
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})//decorator do angular injeta esses componentes na classe criada
export class AppComponent {

  public jogoEmAndamento: boolean = true;
  public tipoEncerramento: string;

  public encerrarJogo(tipo: string): void{
    this.jogoEmAndamento = false;
    this.tipoEncerramento = tipo;
  }

  public reiniciarJogo(): void{
    this.jogoEmAndamento = true;
    this.tipoEncerramento = undefined;
  }
}
