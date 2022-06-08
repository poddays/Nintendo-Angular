import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespartComponent } from './salespart.component';

describe('SalespartComponent', () => {
  let component: SalespartComponent;
  let fixture: ComponentFixture<SalespartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalespartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalespartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
