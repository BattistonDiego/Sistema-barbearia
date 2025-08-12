import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {
  ColumnDef,
  dataTable,
  Funcionario,
} from 'src/app/interfaces/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-babeiros',
  templateUrl: './babeiros.component.html',
  styleUrls: ['./babeiros.component.css'],
})
export class BabeirosComponent implements OnInit {
  columns: ColumnDef[] = [
    { key: 'id', header: 'Id' },
    { key: 'nome', header: 'Nome' },
    { key: 'telefone', header: 'Telefone' },
  ];
  displayedColumns: string[] = this.columns.map((c) => String(c.key));
  dataSource = new MatTableDataSource<Funcionario>([]);

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {
    this.funcionarioService.getListFuncionarios().subscribe({
      next: (res: Funcionario[]) => {
        this.dataSource.data = res;
      },
    });
  }

  mudarDataSource() {
    this.columns = [...this.columns, { key: 'teste', header: 'Teste' }];
  }
}

// mudar a algum dado do dataSource para ativar o onchanges e testar
