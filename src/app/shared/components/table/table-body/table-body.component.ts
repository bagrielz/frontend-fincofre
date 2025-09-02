import { Component, OnInit } from '@angular/core';
import { CheckboxComponent } from '../../checkbox/checkbox.component';
import { TokenService } from '../../../../core/services/token.service';
import { Spent } from '../../../models/spent.model';
import { SpentService } from '../../../../core/services/spent.service';
import { SpentResponse } from '../../../models/spent-response.model';
import { StatusLabel } from '../../../enums/status.enum';
import { CategoryLabel } from '../../../enums/category.enum';
import { MethodLabel } from '../../../enums/method.enum';
import { TypeLabel } from '../../../enums/type.enum';

@Component({
  selector: 'app-table-body',
  imports: [CheckboxComponent],
  templateUrl: './table-body.component.html',
  styleUrl: './table-body.component.css',
})
export class TableBodyComponent implements OnInit {
  token!: string | null;
  spents: Spent[] = [];
  total: number = 0;

  StatusLabel = StatusLabel;
  CategoryLabel = CategoryLabel;
  MethodLabel = MethodLabel;
  TypeLabel = TypeLabel;

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
    this.spentService
      .getAllSpents(this.token)
      .subscribe((response: SpentResponse) => {
        this.spents = response.spents;
        this.total = response.total;
      });
  }

  trackById(index: number, item: Spent): number {
    return item.id;
  }
}
