import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { SpentResponse } from '../../../models/spent-response.model';

@Component({
  selector: 'app-table-footer',
  imports: [CurrencyPipe],
  templateUrl: './table-footer.component.html',
  styleUrl: './table-footer.component.css',
})
export class TableFooterComponent {
  spentsResponse = input<SpentResponse | null>();

  get total(): number | undefined {
    return this.spentsResponse()?.total;
  }
}
