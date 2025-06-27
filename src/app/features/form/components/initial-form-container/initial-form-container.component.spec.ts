import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialFormContainerComponent } from './initial-form-container.component';

describe('InitialFormContainerComponent', () => {
  let component: InitialFormContainerComponent;
  let fixture: ComponentFixture<InitialFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialFormContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
