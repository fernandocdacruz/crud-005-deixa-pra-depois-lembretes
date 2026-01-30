import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItFormComponent } from './post-it-form.component';

describe('PostItFormComponent', () => {
  let component: PostItFormComponent;
  let fixture: ComponentFixture<PostItFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostItFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostItFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
