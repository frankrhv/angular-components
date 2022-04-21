import { Header } from './../table/header';
import { Data } from './../table/data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data: Data[] = [
    { name: 'James', age: 24, job: 'Engineer' },
    { name: 'Jill', age: 26, job: 'Engineer' },
    { name: 'Elyse', age: 24, job: 'Designer' },
  ];

  headers: Header[] = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
