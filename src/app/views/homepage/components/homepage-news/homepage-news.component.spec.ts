import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageNewsComponent } from './homepage-news.component';

describe('HomepageNewsComponent', () => {
  let component: HomepageNewsComponent;
  let fixture: ComponentFixture<HomepageNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
