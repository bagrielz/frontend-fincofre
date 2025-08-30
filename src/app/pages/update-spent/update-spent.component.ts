import { Component } from '@angular/core';
import { EntityFormComponent } from '../../shared/components/form/entity-form/entity-form.component';

@Component({
  selector: 'app-update-spent-form',
  imports: [EntityFormComponent],
  templateUrl: './update-spent.component.html',
  styleUrl: './update-spent.component.css',
})
export class UpdateSpentComponent {
  updateSpentData = (formValue: any) => {
    console.log(formValue);
  };
}
