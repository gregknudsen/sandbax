export interface Review {
  reviews: [];
  text: string;
  rating: number;
  user: {
    name: string,
    image_url: string
  };
  url: string;
}
