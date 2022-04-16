import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchLinkBannerComponent } from './switch-link-banner.component';

describe('SwitchLinkBannerComponent', () => {
  let component: SwitchLinkBannerComponent;
  let fixture: ComponentFixture<SwitchLinkBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchLinkBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchLinkBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
