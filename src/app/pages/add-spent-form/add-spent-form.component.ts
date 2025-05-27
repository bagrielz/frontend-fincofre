import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-add-spent-form',
  imports: [FormComponent, TitleComponent],
  templateUrl: './add-spent-form.component.html',
  styleUrl: './add-spent-form.component.css',
})
export class AddSpentFormComponent {}
