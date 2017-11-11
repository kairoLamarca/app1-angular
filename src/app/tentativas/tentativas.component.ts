import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TentativasComponent implements OnInit {

  public coracaoVazio: string = '/assets/coracao_vazio.png';
  public coracaoCheio: string = '/assets/coracao_cheio.png';
  
  constructor() { }

  ngOnInit() {
  }

}
