import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCardComponent } from './blog-card.component';

describe('BlogCardComponent', () => {
  let component: BlogCardComponent;
  let fixture: ComponentFixture<BlogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [BlogCardComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(BlogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
