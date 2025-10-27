import { Component } from '@angular/core';
import { EntityFormComponent } from '../../shared/components/form/entity-form/entity-form.component';
import { SpentService } from '../../core/services/spent.service';
import { TokenService } from '../../core/services/token.service';
import { Router } from '@angular/router';
import { toSpentCreateDTO } from '../../shared/mappers/spent.mapper';

@Component({
  selector: 'app-add-spent-form',
  imports: [EntityFormComponent],
  templateUrl: './add-spent.component.html',
  styleUrl: './add-spent.component.css',
})
export class AddSpentComponent {
  errorMessage!: string;

  constructor(
    private spentService: SpentService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  sendSpentData = (formValue: any) => {
    const token = this.tokenService.returnToken();
    const dto = toSpentCreateDTO(formValue);

    this.spentService.createSpent(token, dto).subscribe({
      next: () => {
        this.router.navigate(['/inicio']);
      },
      error: (err) => {
        if (err.status === 403) {
          this.errorMessage = 'Todos os campos são obrigatórios';
        }
      },
    });
  };
}
