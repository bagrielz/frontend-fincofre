import { Component, signal } from '@angular/core';
import { PillComponent } from '../../../../components/pill/pill.component';
import { PillConfig } from '../../../../shared/models/pill-config.interface';
import { PillStatus } from '../../../../core/pill-status.config';

@Component({
  selector: 'app-select',
  imports: [PillComponent],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {
  pillList: PillConfig[] = PillStatus;

  selectedPill = signal<PillConfig | null>(null);

  selectPill(pill: PillConfig) {
    this.selectedPill.set(pill);
  }
}
