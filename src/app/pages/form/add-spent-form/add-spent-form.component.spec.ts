import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpentFormComponent } from './add-spent-form.component';

describe('AddSpentFormComponent', () => {
  let component: AddSpentFormComponent;
  let fixture: ComponentFixture<AddSpentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSpentFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddSpentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
