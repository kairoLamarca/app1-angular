import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressoComponent implements OnInit {

  //xyz é a variavel que vai vir com o valor, se os atributos sao igual, nao precisa
  //@Input('xyz') public progresso: number = 25;

  @Input() public progresso: number = 0;//Decorator @Input

  constructor() { }

  ngOnInit() {
  }

}
