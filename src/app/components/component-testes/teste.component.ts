import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css'],
})
export class TesteComponent implements OnChanges, OnInit {
  @Input() nome: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges iniciou...');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('OnInit iniciou...');
  }
}
