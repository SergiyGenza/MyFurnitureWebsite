import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonHeadComponent } from './comparison-head.component';

describe('ComparisonHeadComponent', () => {
  let component: ComparisonHeadComponent;
  let fixture: ComponentFixture<ComparisonHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ComparisonHeadComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ComparisonHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
