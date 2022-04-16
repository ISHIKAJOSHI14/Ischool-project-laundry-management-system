import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestReviewComponent } from './latest-review.component';

describe('LatestReviewComponent', () => {
  let component: LatestReviewComponent;
  let fixture: ComponentFixture<LatestReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
