import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  progressB: number = 40;
  progressG: number = 40;
  constructor() { }

  ngOnInit() {
  }
}
