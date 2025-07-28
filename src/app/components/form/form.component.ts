import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Funcionario } from 'src/app/interfaces/funcionario.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() detalhesFormGroup!: FormGroup;
  @Input() listServico!: string[];
  @Input() currentStep!: number;
  @Input() listDados!: { label: string; control: string }[];
  @Input() listFuncionarios!: Funcionario[];

  ngOnInit(): void {
    console.log(this.currentStep);

    // this.listFuncionarios.push({
    //   id: 10,
    //   nome: 'Teste',
    //   email: 'Teste@gmail.com',
    //   telefone: '191066222',
    // });
  }
}
