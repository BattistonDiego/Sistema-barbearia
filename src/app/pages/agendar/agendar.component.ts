import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosCadastroAgendamento } from 'src/app/interfaces/agendamento.model';
import { Funcionario } from 'src/app/interfaces/funcionario.model';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';

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
  listFuncionario: Funcionario[] = [];

  listServico = [
    'Corte Clássico',
    'Barba Completa',
    'Combo Corte + Barba',
    'Acabamento Navalhado',
  ];

  listDadosPessoais = [
    { label: 'Nome', control: 'nome' },
    { label: 'Telefone', control: 'telefone' },
    { label: 'Email', control: 'email' },
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private agendamentoService: AgendamentoService,
    private funcionarioService: FuncionarioService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.detalhesFormGroup = this._formBuilder.group({
      servico: ['', Validators.required],
      barbeiro: ['', Validators.required],
      data: ['', Validators.required],
      hora: ['', Validators.required],
      nome: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      email: ['', [Validators.required, Validators.email]],
    });
    this.getFuncionarios();

    this.detalhesFormGroup.get('telefone')?.valueChanges.subscribe((value) => {
      if (value && value.length > 11) {
        this.detalhesFormGroup
          .get('telefone')
          ?.setValue(value.slice(0, 11), { emitEvent: false });
      }
    });
  }

  getFuncionarios() {
    this.funcionarioService.getListFuncionarios().subscribe({
      next: (res) => {
        this.listFuncionario = res;
      },
    });
  }

  postAgendamento() {
    const body = this.buildObject();

    let dialogRef: MatDialogRef<ModalComponent>;

    this.agendamentoService.postAgendamentos(body).subscribe({
      next: () => {
        dialogRef = this.dialog.open(ModalComponent, {
          data: {
            sucesso: true,
            mensagem: 'Agendamento realizado com sucesso!',
          },
        });

        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            console.log(result + ' Modal fechado com sucesso');
          }
        });
      },

      error: (erro) => {
        console.error('Erro no agendamento:', erro);

        this.dialog.open(ModalComponent, {
          data: {
            sucesso: false,
            mensagem: 'Erro ao agendar, tente novamente mais tarde',
          },
        });
      },
    });

    console.log(body);
  }

  validaCamposStep1(): boolean {
    return this.detalhesFormGroup.get('servico')?.value &&
      this.detalhesFormGroup.get('barbeiro')?.value &&
      this.detalhesFormGroup.get('data')?.value &&
      this.detalhesFormGroup.get('hora')?.value
      ? true
      : false;
  }

  validaCamposStep2(): boolean {
    return this.detalhesFormGroup.get('nome')?.value &&
      this.detalhesFormGroup.get('telefone')?.value &&
      this.detalhesFormGroup.get('email')?.value
      ? true
      : false;
  }

  buildObject(): DadosCadastroAgendamento {
    const dataFormatada = this.detalhesFormGroup.value.data
      .toISOString()
      .split('T')[0]; // "2025-07-18"

    const obj: DadosCadastroAgendamento = {
      funcionarioId: this.detalhesFormGroup.value.barbeiro,
      clienteNome: this.detalhesFormGroup.value.nome,
      clienteTelefone: this.detalhesFormGroup.value.telefone,
      clienteEmail: this.detalhesFormGroup.value.email,
      data: dataFormatada,
      hora: this.detalhesFormGroup.value.hora,
      servico: this.detalhesFormGroup.value.servico,
    };
    return obj;
  }

  teste() {
    this.dialog.open(ModalComponent);
  }
}
