import { Component, OnInit } from '@angular/core';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private servicoService: ServicoService) {}

  async ngOnInit() {
    this.servicoService.getListServico().subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
