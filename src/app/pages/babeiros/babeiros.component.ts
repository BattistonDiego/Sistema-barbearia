import { Component } from '@angular/core';

@Component({
  selector: 'app-babeiros',
  templateUrl: './babeiros.component.html',
  styleUrls: ['./babeiros.component.css'],
})
export class BabeirosComponent {
  frutas: string[] = ['Maçã', 'Banana', 'Laranja', 'Uva'];
  novoItem: string = '';

  adicionarItem(item: string) {
    this.frutas.push(item);
    this.novoItem = '';
  }
}
