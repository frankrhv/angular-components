import { Item } from './../item-list/item';
import { Statistic } from './../statistics/statistic';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats: Statistic[] = [
    { value: 22, label: '# of Users' },
    { value: 987, label: 'Revenue' },
    { value: 67, label: 'Reviews' },
  ];

  items: Item[] = [
    {
      title: 'Arrowhead Valley Camp',
      image: 'https://semantic-ui.com/images/wireframe/image.png',
      price: 1200,
      stay: '1 Month',
      description: 'description 1',
    },
    {
      title: "Buck's Homebrew Stayaway",
      image: 'https://semantic-ui.com/images/wireframe/image.png',
      price: 1000,
      stay: '2 Weeks',
      description: 'description 2',
    },
    {
      title: 'Astrology Camp',
      image: 'https://semantic-ui.com/images/wireframe/image.png',
      price: 1600,
      stay: '6 Weeks',
      description: 'description 3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
