import { Component } from '@angular/core';
import { FormContainerComponent } from '../../components/form-container/form-container.component';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-add-spent-form',
  imports: [FormContainerComponent, TitleComponent],
  templateUrl: './add-spent-form.component.html',
  styleUrl: './add-spent-form.component.css',
})
export class AddSpentFormComponent {}
