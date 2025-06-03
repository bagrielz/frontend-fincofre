import { Component, input } from '@angular/core';

type Value = {
  subtitle: string;
  paragraph: string;
};

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.css',
})
export class FormContainerComponent {
  value = input.required<Value>();
}
