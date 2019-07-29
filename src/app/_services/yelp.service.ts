import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Business } from '../models/Business';
import { Review } from '../models/Review';

// const httpOptions = {
//   headers: new HttpHeaders(
//     {
//       'Access-Control-Allow-Origin': '*',
//       // tslint:disable-next-line:object-literal-key-quotes
//       'Authorization':
//       // tslint:disable-next-line:max-line-length
//         'Bearer C-Jt7S7SnF6pIe2PPnflMogxxTPpVeJbfE6QihykmA64IJzhwLdSsJ15hkZeUjzaKx6uqKADhU8kvfyqz9AWHhT_hRW34N6ZKwStKAOlyZVmi5JMc4uTO5o-KHptXHYx',
//       'Content-Type': 'application/json'
//     }
//   )
// };

@Injectable({
  providedIn: 'root'
})
export class YelpService {
  alias = 'brunzies-indiana';
  url = 'http://localhost:3000/api/yelp';

constructor(public http: HttpClient) { }

  // getTest(): Observable<any> {
  //   return this.http.get<any>(this.testUrl);
  // }

  getData(): Observable<Business> {
    return this.http.get<Business>(`${this.url}/${ this.alias }`);
  }

  getReviews(): Observable<Review> {
    return this.http.get<Review>(`${this.url}/${ this.alias }/reviews`);
  }

}
