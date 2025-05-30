import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonToolComponent } from './comparison-tool.component';

describe('ComparisonToolComponent', () => {
  let component: ComparisonToolComponent;
  let fixture: ComponentFixture<ComparisonToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ComparisonToolComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ComparisonToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
