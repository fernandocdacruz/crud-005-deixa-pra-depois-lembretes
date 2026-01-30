import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPostItComponent } from './novo-post-it.component';

describe('NovoPostItComponent', () => {
  let component: NovoPostItComponent;
  let fixture: ComponentFixture<NovoPostItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoPostItComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoPostItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
