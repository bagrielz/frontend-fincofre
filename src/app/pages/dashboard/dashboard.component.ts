import { Component, computed, OnInit } from '@angular/core';
import { TableComponent } from '../../shared/components/table/table.component';
import { TitleComponent } from '../../shared/components/title/title.component';
import { ToastComponent } from '../../shared/components/toast/toast.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { SelectionService } from '../../core/services/selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [TableComponent, TitleComponent, ToastComponent, ButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  constructor(
    private selectionService: SelectionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.selectionService.clearSelection();
  }

  spentsSelection = computed(() =>
    this.selectionService.selectedSpents().map((s) => s.id)
  );
  hasSelection = computed(() => this.selectionService.selectedSpents().length);
  selectedTotal = computed(() =>
    this.selectionService.selectedSpents().reduce((acc, s) => acc + s.value, 0)
  );

  addsNewSpent() {
    this.router.navigateByUrl('/adicionar-gasto');
  }
}
