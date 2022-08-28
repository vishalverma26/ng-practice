import { Component, OnDestroy, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-observable-home',
  templateUrl: './observable-home.component.html',
  styleUrls: ['./observable-home.component.scss']
})
export class ObservableHomeComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
    this.subscription.add(interval(1000).subscribe(data => {
      console.log(data);
    }));

    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(++count);
        // complete observable
        // A complete observable DOES NOT emit any value!
        if (count > 3) {
          observer.complete();
        }

        // error case for observable
        if (count > 4) {
          observer.error(new Error('Count has reached above 4!'));
        }
      }, 1000);
    });

    this.subscription.add(customIntervalObservable.pipe(filter(data => data > 1), map((data: number) => data + ' - data from our own custom observable!')).subscribe((data) => {
      console.log(data);
    }, error => {
      console.log(error);
    }, () => {
      console.log('Observable completed!')
    }));
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
