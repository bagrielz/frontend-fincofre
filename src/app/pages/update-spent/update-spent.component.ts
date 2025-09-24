import { Component, OnInit } from '@angular/core';
import { EntityFormComponent } from '../../shared/components/form/entity-form/entity-form.component';
import { TokenService } from '../../core/services/token.service';
import { SpentService } from '../../core/services/spent.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Spent } from '../../shared/models/spent.model';

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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const token = this.tokenService.returnToken();

    if (id && token) {
      this.spent$ = this.spentService.getSpentById(token, id);
    } else {
      this.spent$ = of(null);
    }
  }

  getSpentData = () => this.spent$;

  updateSpentData = (formValue: any) => {
    console.log('Teste');
  };
}
