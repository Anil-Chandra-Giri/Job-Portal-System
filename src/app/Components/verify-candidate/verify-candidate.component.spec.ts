import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyCandidateComponent } from './verify-candidate.component';

describe('VerifyCandidateComponent', () => {
  let component: VerifyCandidateComponent;
  let fixture: ComponentFixture<VerifyCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyCandidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
