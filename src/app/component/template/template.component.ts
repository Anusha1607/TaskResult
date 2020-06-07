import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  name: any = "Cafe Goodluck";
  area: any = "Deccan Gymkhana";
  city: any = "Pune";
  currentRate = 3.14;
  category: any = [
    { catName: "Restaurant" },
    { catName: "Cafe" },
    { catName: "Breakfast" },
  ];
  reviewRating: any = {
    votes: [
      {
        "rating": 5,
        "votes": 201
      },
      {
        "rating": 4,
        "votes": 159
      },
      {
        "rating": 3,
        "votes": 69
      },
      {
        "rating": 2,
        "votes": 49
      },
      {
        "rating": 1,
        "votes": 125
      }
    ],
    total: 603
  };
  coverImage: any = "https://content3.jdmagicbox.com/comp/pune/p6/020pxx20.xx20.180309120117.g6p6/catalogue/cafe-good-luck-pune-solapur-road-pune-home-delivery-restaurants-j7ane.jpg";
  featureRating: any = {
    place: 3.6,
    food: 3.5,
    service: 3.8,
    staff: 4.1,
    breakfast: 3.4
  }
  constructor() { }

  ngOnInit() {
  }

}
