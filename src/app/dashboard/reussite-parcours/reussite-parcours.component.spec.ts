import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReussiteParcoursComponent } from './reussite-parcours.component';

describe('ReussiteParcoursComponent', () => {
  let component: ReussiteParcoursComponent;
  let fixture: ComponentFixture<ReussiteParcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReussiteParcoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReussiteParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
