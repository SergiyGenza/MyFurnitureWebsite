import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTempComponent } from './info-temp.component';

describe('InfoTempComponent', () => {
  let component: InfoTempComponent;
  let fixture: ComponentFixture<InfoTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoTempComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
