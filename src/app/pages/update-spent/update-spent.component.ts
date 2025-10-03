import { Component, OnInit } from '@angular/core';
import { EntityFormComponent } from '../../shared/components/form/entity-form/entity-form.component';
import { TokenService } from '../../core/services/token.service';
import { SpentService } from '../../core/services/spent.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Spent } from '../../shared/models/spent.model';
import { HttpHeaders } from '@angular/common/http';
import { toSpentUpdateDTO } from '../../shared/mappers/spent.mapper';

@Component({
  selector: 'app-update-spent-form',
  imports: [EntityFormComponent],
  templateUrl: './update-spent.component.html',
  styleUrl: './update-spent.component.css',
})
export class UpdateSpentComponent implements OnInit {
  spent$!: Observable<Spent | null>;

  constructor(
    private tokenService: TokenService,
    private spentService: SpentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.getParamMap();
    const token = this.tokenService.returnToken();

    if (id && token) {
      this.spent$ = this.spentService.getSpentById(token, id);
    } else {
      this.spent$ = of(null);
    }
  }

  getParamMap(): number {
    return Number(this.route.snapshot.paramMap.get('id'));
  }

  getSpentData = () => this.spent$;

  updateSpentData = (formValue: any) => {
    const token = this.tokenService.returnToken();
    const id = this.getParamMap();
    const dto = toSpentUpdateDTO(formValue);

    this.spentService.updateSpent(token, dto, id).subscribe({
      next: (res) => {
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate([`/editar-gasto/${res.id}`]);
          });
      },
      error: (err) => {
        console.log(err);
      },
    });
  };
}
