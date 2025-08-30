import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSpentComponent } from './update-spent.component';

describe('UpdateSpentComponent', () => {
  let component: UpdateSpentComponent;
  let fixture: ComponentFixture<UpdateSpentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSpentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateSpentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
