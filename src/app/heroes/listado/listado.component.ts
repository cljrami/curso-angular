import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Acquaman'];
  heroeBorrado: string = '';
  borrarHeroe() {
    /*const heroeBorrado = this.heroes.shift();*/
    /*this.heroes.shift();*/
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
