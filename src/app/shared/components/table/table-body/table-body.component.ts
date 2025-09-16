import { Component, input, output } from '@angular/core';
import { CheckboxComponent } from '../../checkbox/checkbox.component';
import { Spent } from '../../../models/spent.model';
import { StatusLabel } from '../../../enums/status.enum';
import { CategoryLabel } from '../../../enums/category.enum';
import { MethodLabel } from '../../../enums/method.enum';
import { TypeLabel } from '../../../enums/type.enum';
import { CurrencyPipe } from '@angular/common';
import { PillComponent } from '../../pill/pill.component';
import { PillStatusConfig } from '../../../../core/config/pill-status.config';
import { PaymentMethodComponent } from '../../payment-method/payment-method.component';
import { PillMethodConfig } from '../../../../core/config/pill-method.config';

@Component({
  selector: 'app-table-body',
  imports: [
    CheckboxComponent,
    CurrencyPipe,
    PillComponent,
    PaymentMethodComponent,
  ],
  templateUrl: './table-body.component.html',
  styleUrl: './table-body.component.css',
})
export class TableBodyComponent {
  spents = input<Spent[]>();

  StatusLabel = StatusLabel;
  CategoryLabel = CategoryLabel;
  MethodLabel = MethodLabel;
  TypeLabel = TypeLabel;
  PillStatusConfig = PillStatusConfig;
  PillMethodConfig = PillMethodConfig;

  trackById(item: Spent): number {
    return item.id;
  }
}
