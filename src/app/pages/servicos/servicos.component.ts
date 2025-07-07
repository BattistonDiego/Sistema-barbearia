import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/app/interfaces/servico.model';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css'],
})
export class ServicosComponent implements OnInit {
  constructor(private servicoService: ServicoService) {}

  listServicos: Servico[] = [];

  async ngOnInit() {
    this.getList();
  }

  getList() {
    this.servicoService.getListServico().subscribe({
      next: (res) => {
        this.listServicos = res;
        console.log(this.listServicos);
      },
    });
  }
}
