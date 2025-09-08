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
    private tokenService: TokenService
  ) {
    this.spentsResponse$ = this.spentService.spentsResponse$;
  }

  ngOnInit(): void {
    const token = this.tokenService.returnToken();
    this.spentService.getAllSpents(token);
  }

  onTabChange(type: string) {
    console.log(type);
  }
}
