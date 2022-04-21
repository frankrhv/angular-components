import { Header } from './header';
import { Data } from './data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input('class') className = '';

  @Input() data: Data[] = [];

  @Input() headers: Header[] = [];

  constructor() {}

  ngOnInit(): void {}

  getData(data: Data, key: string) {
    return data[key as keyof Data];
  }
}
