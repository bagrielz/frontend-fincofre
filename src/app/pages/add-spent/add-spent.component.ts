import { Component } from '@angular/core';
import { EntityFormComponent } from '../../shared/components/form/entity-form/entity-form.component';

@Component({
  selector: 'app-add-spent-form',
  imports: [EntityFormComponent],
  templateUrl: './add-spent.component.html',
  styleUrl: './add-spent.component.css',
})
export class AddSpentComponent {
  sendSpentData = (formValue: any) => {
    console.log(formValue);
  };
}
