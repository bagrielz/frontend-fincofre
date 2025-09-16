import { Component, computed } from '@angular/core';
import { TableComponent } from '../../shared/components/table/table.component';
import { TitleComponent } from '../../shared/components/title/title.component';
import { ToastComponent } from '../../shared/components/toast/toast.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { SelectionService } from '../../core/services/selection.service';

@Component({
  selector: 'app-dashboard',
  imports: [TableComponent, TitleComponent, ToastComponent, ButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private selectionService: SelectionService) {}

  hasSelection = computed(() => this.selectionService.selectedSpents().length);
  selectedTotal = computed(() =>
    this.selectionService.selectedSpents().reduce((acc, s) => acc + s.value, 0)
  );
}
