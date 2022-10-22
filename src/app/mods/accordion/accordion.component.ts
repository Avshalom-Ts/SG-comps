import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() items: any[] = [];
  openedItemIndex: number = NaN;

  constructor() {}

  ngOnInit(): void {}

  onClick(index: number) {
    if (index === this.openedItemIndex) {
      this.openedItemIndex = NaN;
    } else {
      this.openedItemIndex = index;
    }
  }
}
