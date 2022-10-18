import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationCoursComponent } from './situation-cours.component';

describe('SituationCoursComponent', () => {
  let component: SituationCoursComponent;
  let fixture: ComponentFixture<SituationCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituationCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SituationCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
