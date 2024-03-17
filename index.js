import { Observable } from 'rxjs';

const observable = new Observable((subscriber) => {
  // observale gonna emit data
  // in order to emit data from callback we need to subscribe
  subscriber.next(10);
  //emit value 10
  subscriber.next(20);
  subscriber.next(30);
  observer.next('Hello');
  setTimeout(() => observer.next('World'), 1000);
  setTimeout(() => observer.error(new Error('Something went wrong!')), 2000);
  setTimeout(() => observer.complete(), 3000);
});

const observer = {
  next: (value) => console.log('Observer got a value ' + value),
  error: (error) => console.log('Observer got an error' + error),
  complete: () => console.log('Observer got completed'),
};

observable.subscribe(observer);
