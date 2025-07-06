import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSpentFormComponent } from './update-spent-form.component';

describe('UpdateSpentFormComponent', () => {
  let component: UpdateSpentFormComponent;
  let fixture: ComponentFixture<UpdateSpentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSpentFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSpentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
