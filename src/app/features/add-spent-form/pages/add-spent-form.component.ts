import { Component } from '@angular/core';
import { TitleComponent } from '../../dashboard/components/title/title.component';
import { FormComponent } from '../../../shared/components/form/form.component';

@Component({
  selector: 'app-add-spent-form',
  imports: [TitleComponent, FormComponent],
  templateUrl: './add-spent-form.component.html',
  styleUrl: './add-spent-form.component.css',
})
export class AddSpentFormComponent {}
