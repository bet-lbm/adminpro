import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {

    this.countThree().then(
      message => console.log('Terminado!', message)
    )
    .catch( error => console.error('Error en la promesa', error) );
  }

  ngOnInit() {
  }

  countThree(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let counter = 0;
      let interval = setInterval( () => {
        counter += 1;
        console.log(counter);
        if ( counter === 3 ) {
          resolve(true);
          // reject('solo es un error');
          clearInterval(interval);
        }
      }, 1000 );
    } );
  }

}
