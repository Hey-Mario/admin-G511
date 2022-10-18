import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAttestationComponent } from './list-attestation.component';

describe('ListAttestationComponent', () => {
  let component: ListAttestationComponent;
  let fixture: ComponentFixture<ListAttestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAttestationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAttestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
