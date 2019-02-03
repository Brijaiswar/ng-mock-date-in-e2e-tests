import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-date',
  template: `
    Current date is <span class="e2e-curr-date">{{currentDate | date:'yyyy-MM-dd'}}</span>
  `,
})
export class DateComponent implements OnInit {
  currentDate: Date;
  constructor(private dateSvc: DateService) {}
  ngOnInit() {
    this.currentDate = this.dateSvc.getCurrentDate();
  }
}
