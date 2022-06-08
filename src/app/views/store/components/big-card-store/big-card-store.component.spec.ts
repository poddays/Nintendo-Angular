import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCardStoreComponent } from './big-card-store.component';

describe('BigCardStoreComponent', () => {
  let component: BigCardStoreComponent;
  let fixture: ComponentFixture<BigCardStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigCardStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigCardStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
