import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { PillComponent } from '../../../../components/pill/pill.component';
import { PillConfig } from '../../../../shared/models/pill-config.interface';
import { PillStatus } from '../../../../core/pill-status.config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select',
  imports: [PillComponent, CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {
  pillList: PillConfig[] = PillStatus;

  selectedPill = signal<PillConfig | null>(null);

  @ViewChild('optionsViewButton', { static: false })
  optionsViewButtonRef!: ElementRef;

  selectPill(pill: PillConfig) {
    this.selectedPill.set(pill);

    if (this.optionsViewButtonRef) {
      this.optionsViewButtonRef.nativeElement.checked = false;
    }
  }

  handleKeydown(event: KeyboardEvent, pill: PillConfig) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.selectPill(pill);
    }
  }
}
