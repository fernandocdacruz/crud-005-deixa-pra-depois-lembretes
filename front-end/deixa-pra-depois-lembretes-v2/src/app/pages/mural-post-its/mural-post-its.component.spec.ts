import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralPostItsComponent } from './mural-post-its.component';

describe('MuralPostItsComponent', () => {
  let component: MuralPostItsComponent;
  let fixture: ComponentFixture<MuralPostItsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuralPostItsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuralPostItsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
