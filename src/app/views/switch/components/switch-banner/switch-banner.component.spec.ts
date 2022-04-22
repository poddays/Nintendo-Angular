import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchBannerComponent } from './switch-banner.component';

describe('SwitchBannerComponent', () => {
  let component: SwitchBannerComponent;
  let fixture: ComponentFixture<SwitchBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
