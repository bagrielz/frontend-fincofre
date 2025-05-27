import { Component, input } from '@angular/core';

type Value = {
  subtitle: string;
  paragraph: string;
};

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  value = input.required<Value>();
}
