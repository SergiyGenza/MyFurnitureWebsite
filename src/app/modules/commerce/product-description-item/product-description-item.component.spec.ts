import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescriptionItemComponent } from './product-description-item.component';

describe('ProductDescriptionItemComponent', () => {
  let component: ProductDescriptionItemComponent;
  let fixture: ComponentFixture<ProductDescriptionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ProductDescriptionItemComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ProductDescriptionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
