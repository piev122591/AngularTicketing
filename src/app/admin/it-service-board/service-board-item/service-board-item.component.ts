import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mts-service-board-item',
  templateUrl: './service-board-item.component.html',
  styleUrls: ['./service-board-item.component.scss'],
})
export class ServiceBoardItemComponent implements OnInit {
  comment: string;
  activities: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  post() {
    this.activities.push({
      data: this.comment,
      date: new Date(),
    });

    this.comment = '';
  }
}
