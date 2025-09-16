import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Pill } from '../../models/pill.model';

@Component({
  selector: 'app-pill',
  imports: [CommonModule],
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.css',
})
export class PillComponent {
  props = input.required<Pill>();
}
