import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../../../core/services/token.service';
import { SpentService } from '../../../../core/services/spent.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-table-footer',
  imports: [CurrencyPipe],
  templateUrl: './table-footer.component.html',
  styleUrl: './table-footer.component.css',
})
export class TableFooterComponent implements OnInit {
  token!: string | null;
  total!: number;

  constructor(
    private tokenService: TokenService,
    private spentService: SpentService
  ) {}

  ngOnInit(): void {
    this.token = this.tokenService.returnToken();
    this.spentService.getAllSpents(this.token);

    this.spentService.spentsResponse$.subscribe((res) => {
      this.total = res.total;
    });
  }
}
