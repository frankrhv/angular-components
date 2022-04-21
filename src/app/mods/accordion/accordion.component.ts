import { Component, OnInit, Input } from '@angular/core';
import { Accordion } from './accordion';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() items: Accordion[] = [];

  openedItemIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  onClickActive(index: number) {
    if (index === this.openedItemIndex) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = index;
    }
  }
}
