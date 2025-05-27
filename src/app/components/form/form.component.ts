import { Component, input } from '@angular/core';
import { CustomBackgroundComponent } from '../shared/custom-background/custom-background.component';

type Value = {
  subtitle: string;
  paragraph: string;
};

@Component({
  selector: 'app-form',
  imports: [CustomBackgroundComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  value = input.required<Value>();
}
