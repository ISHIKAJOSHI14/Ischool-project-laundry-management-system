import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { LatestReviewComponent } from './latest-review/latest-review.component';
import { FeaturedReviewComponent } from './featured-review/featured-review.component';



@NgModule({
  declarations: [
    ReviewListComponent,
    ReviewDetailsComponent,
    LatestReviewComponent,
    FeaturedReviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LatestReviewComponent]
})
export class ReviewsModule { }
