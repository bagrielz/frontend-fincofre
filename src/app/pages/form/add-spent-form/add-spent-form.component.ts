import { Component } from '@angular/core';
import { EntityFormComponent } from '../../../shared/components/form/entity-form/entity-form.component';

@Component({
  selector: 'app-add-spent-form',
  imports: [EntityFormComponent],
  templateUrl: './add-spent-form.component.html',
  styleUrl: './add-spent-form.component.css',
})
export class AddSpentFormComponent {
  sendSpentData = (formValue: any) => {
    console.log(formValue);
  };
}
