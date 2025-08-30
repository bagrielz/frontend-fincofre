import { Component } from '@angular/core';
import { EntityFormComponent } from '../../../shared/components/form/entity-form/entity-form.component';

@Component({
  selector: 'app-update-spent-form',
  imports: [EntityFormComponent],
  templateUrl: './update-spent-form.component.html',
  styleUrl: './update-spent-form.component.css',
})
export class UpdateSpentFormComponent {
  updateSpentData = (formValue: any) => {
    console.log(formValue);
  };
}
