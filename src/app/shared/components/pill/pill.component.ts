import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { PillConfig } from '../../models/pill-config.model';

@Component({
  selector: 'app-pill',
  imports: [CommonModule],
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.css',
})
export class PillComponent {
  props = input.required<PillConfig>();
}
