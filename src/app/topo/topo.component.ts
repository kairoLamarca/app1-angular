import { Component } from '@angular/core';

@Component({
    selector: 'app-topo',
    //selector: '[app-topo]',//no html fica <div app-topo></app-topo>
    //selector: '.app-topo',//funciona como class -- não pode ter uma classe com o mesmo nome no css
    templateUrl: './topo.component.html',
    //template: `<p>
    //                Esse é o componente topo novo
    //            </p>`//template não precisa de um arquivo -- Crase possibilita quebrar linha
    // styles: [`
    //         .exemplo { 
    //             color: red 
    //         }
    //         '`]//este estilo sera usado somente no component referenciado junto
    styleUrls: ['./topo.component.css']
})
export class TopoComponent { 
    public titulo: string = 'Aprendendo Inglês';
}