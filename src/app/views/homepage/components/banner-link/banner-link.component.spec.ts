import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerLinkComponent } from './banner-link.component';

describe('BannerLinkComponent', () => {
  let component: BannerLinkComponent;
  let fixture: ComponentFixture<BannerLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
