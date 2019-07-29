import { Component, OnInit } from '@angular/core';
import { YelpService } from 'src/app/_services/yelp.service';
import { Business } from 'src/app/models/Business';
import { Review } from 'src/app/models/Review';

@Component({
  selector: 'app-yelp',
  templateUrl: './yelp.component.html',
  styleUrls: ['./yelp.component.css']
})
export class YelpComponent implements OnInit {
  business: Business;
  reviews: Review[];

  constructor(private yelp: YelpService) {}

  ngOnInit() {
    this.getData();
    this.fetchReviews();
  }
  getData() {
    this.yelp.getData().subscribe(data => {
      this.business = data;
      console.log('DATA', data);
    });
  }

  fetchReviews() {
    this.yelp.getReviews().subscribe(reviews => {
      console.log('Reviews', reviews.reviews);
      this.reviews = reviews.reviews;
    });
  }
}
