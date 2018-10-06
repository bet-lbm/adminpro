import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscriber, Subscription } from 'rxjs/Rx';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.returnObservable()
    .subscribe(
      number => console.log('Subs', number),
      error => console.error('Error en obs', error),
      () => console.log('El observador termino!')
    );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La pagina se va cerrar...');
    this.subscription.unsubscribe();
  }

  returnObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let counter = 0;
      let interval = setInterval( () => {
        counter ++;
        const exit = {
          valor: counter
        };
        observer.next(exit);
        // if ( counter === 3 ) {
        //   clearInterval(interval);
        //   observer.complete();
        // }
      }, 1000);
    }).pipe(
      map( answer => answer.valor ),
      filter(( valor, index ) => {
        if ((valor % 2) === 1) {
          // impar
          return true;
        } else {
          // par
          return false;
        }
      })
    );
  }

}
