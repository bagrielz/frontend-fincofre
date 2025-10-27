import { Component, OnInit } from '@angular/core';
import { TableHeadComponent } from './table-head/table-head.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TableFooterComponent } from './table-footer/table-footer.component';
import { ButtonComponent } from '../button/button.component';
import { TabsComponent } from '../tabs/tabs.component';
import { SpentService } from '../../../core/services/spent.service';
import { TokenService } from '../../../core/services/token.service';
import { Observable } from 'rxjs';
import { SpentResponse } from '../../models/spent-response.model';
import { AsyncPipe } from '@angular/common';
import { SelectionService } from '../../../core/services/selection.service';

@Component({
  selector: 'app-table',
  imports: [
    TabsComponent,
    TableHeadComponent,
    TableBodyComponent,
    TableFooterComponent,
    ButtonComponent,
    AsyncPipe,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  spentsResponse$!: Observable<SpentResponse>;

  constructor(
    private spentService: SpentService,
    private selectionService: SelectionService
  ) {
    this.spentsResponse$ = this.spentService.spentsResponse$;
    console.log(this.spentsResponse$);
  }

  ngOnInit(): void {
    this.spentService.getAllSpents();
  }

  onTabChange(type: string) {
    this.selectionService.clearSelection();

    if (!type) {
      this.spentService.getAllSpents();
    } else {
      this.spentService.getSpentsByType(type);
    }
  }
}
