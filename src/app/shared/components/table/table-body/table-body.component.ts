import { Component, input } from '@angular/core';
import { CheckboxComponent } from '../../checkbox/checkbox.component';
import { Spent } from '../../../models/spent.model';
import { StatusLabel } from '../../../enums/status.enum';
import { CategoryLabel } from '../../../enums/category.enum';
import { MethodLabel } from '../../../enums/method.enum';
import { TypeLabel } from '../../../enums/type.enum';
import { CurrencyPipe } from '@angular/common';
import { PillComponent } from '../../pill/pill.component';
import { PillStatus } from '../../../../core/config/pill-status.config';

@Component({
  selector: 'app-table-body',
  imports: [CheckboxComponent, CurrencyPipe, PillComponent],
  templateUrl: './table-body.component.html',
  styleUrl: './table-body.component.css',
})
export class TableBodyComponent {
  spents = input<Spent[]>();

  StatusLabel = StatusLabel;
  CategoryLabel = CategoryLabel;
  MethodLabel = MethodLabel;
  TypeLabel = TypeLabel;
  PillStatus = PillStatus;

  trackById(item: Spent): number {
    return item.id;
  }
}
