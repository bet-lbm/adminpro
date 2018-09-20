import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafic-doughnut',
  templateUrl: './grafic-doughnut.component.html',
  styles: []
})
export class GraficDoughnutComponent implements OnInit {
  @Input() chartLabels: string[] = [];
  @Input() chartData: number[] = [];
  @Input() chartType: string = '';
  constructor() { }

  ngOnInit() {
  }

}
