import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() legend: string = 'Leyenda!';
  @Input() percentage: number = 50;
  @Output() changeValor: EventEmitter<number> = new EventEmitter();
  constructor() {
    // console.log('Leyenda', this.legend);
    // console.log('Progreso', this.percentage);
   }

  ngOnInit() {
    // console.log('Leyenda', this.legend);
    // console.log('Progreso', this.percentage);
  }

  onChanges( newValue: number ) {
    // let elemHTML: any = document.getElementsByName('percentage')[0];
    // console.log( this.txtProgress );
    if ( newValue >= 100 ) {
      this.percentage = 100;
    } else if ( newValue <= 0 ) {
      this.percentage = 0;
    } else {
      this.percentage = newValue;
    }
    // elemHTML.value = this.percentage;
    this.txtProgress.nativeElement.value = this.percentage;
    this.changeValor.emit( this.percentage );
  }

  changeValue( valor: number ) {
    if ( this.percentage >= 100 && valor > 0 ) {
      this.percentage = 100;
      return;
    }
    if ( this.percentage <= 0 && valor < 0 ) {
      this.percentage = 0;
      return;
    }
    this.percentage = this.percentage + valor;
    this.changeValor.emit( this.percentage );
    this.txtProgress.nativeElement.focus();
  }
}
