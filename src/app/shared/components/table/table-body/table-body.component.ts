import { Component, OnInit } from '@angular/core';
import { CheckboxComponent } from '../../checkbox/checkbox.component';
import { TokenService } from '../../../../core/services/token.service';
import { Spent } from '../../../models/spent.interface';
import { SpentService } from '../../../../core/services/spent.service';

@Component({
  selector: 'app-table-body',
  imports: [CheckboxComponent],
  templateUrl: './table-body.component.html',
  styleUrl: './table-body.component.css',
})
export class TableBodyComponent implements OnInit {
  token!: string | null;
  spents: Spent[] = [];

  data = [
    '01/01/2025',
    'Gasto exemplo',
    'Agendado',
    'R$ 4,90',
    'Internet',
    'Nubank',
    'Fixo',
    'Crédito',
  ];

  constructor(
    private tokenService: TokenService,
    private spentService: SpentService
  ) {}

  ngOnInit(): void {
    this.token = this.tokenService.returnToken();
    this.spentService.getAllSpents(this.token).subscribe((spents) => {
      this.spents = spents;
      console.log('Dados carregados: ', this.spents);
    });

    console.log(this.spents);
  }
}
