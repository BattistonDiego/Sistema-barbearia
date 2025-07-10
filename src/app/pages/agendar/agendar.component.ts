import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css'],
})
export class AgendarComponent implements OnInit {
  detalhesFormGroup!: FormGroup;
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  servico: string = '';
  barbeiro: string = '';

  listServico = [
    'Corte Clássico',
    'Barba Completa',
    'Combo Corte + Barba',
    'Acabamento Navalhado',
  ];

  listBarbeiro = ['Gabriel', 'Giovanni', 'Fabio'];

  listDadosPessoais = [
    { label: 'Nome', control: 'nome' },
    { label: 'Telefone', control: 'telefone' },
    { label: 'Email', control: 'email' },
  ];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.detalhesFormGroup = this._formBuilder.group({
      servico: ['', Validators.required],
      barbeiro: ['', Validators.required],
      data: ['', Validators.required], // exemplo se você tiver o campo "data"
      hora: ['', Validators.required],
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  dadosCorte() {
    console.log(this.detalhesFormGroup.value);
  }
}
