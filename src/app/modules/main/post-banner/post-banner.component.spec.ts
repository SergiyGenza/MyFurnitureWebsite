import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBannerComponent } from './post-banner.component';

describe('PostBannerComponent', () => {
  let component: PostBannerComponent;
  let fixture: ComponentFixture<PostBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PostBannerComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PostBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
