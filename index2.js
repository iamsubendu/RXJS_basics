import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const users = {
  data: [
    {
      status: 'active',
      age: 14,
    },
    {
      status: 'active',
      age: 16,
    },
    {
      status: 'active',
      age: 10,
    },
    {
      status: 'active',
      age: 18,
    },
    {
      status: 'inactive',
      age: 17,
    },
    {
      status: 'inactive',
      age: 108,
    },
    {
      status: 'active',
      age: 21,
    },
    {
      status: 'inactive',
      age: 15,
    },
  ],
};

const observable = new Observable((subscriber) => {
  subscriber.next(users);
  //now data wont flow directly into observer, instead it will go to pipe first
}).pipe(
  map((responseFromObservale) => {
    // console.log('Inside first operator', responseFromObservale);
    return responseFromObservale.data;
  }),
  map((value2) => {
    // console.log('Inside second operator', value2);
    return value2.filter((user) => user.status === 'inactive');
  }),
  map((value3) => {
    // console.log('Inside third operator', value3);
    //initial value of sum 0
    //average age
    return value3.reduce((sum, user) => sum + user.age, 0) / value3.length;
  }),
  map((value4) => {
    // console.log('Inside fourth operator', value4);
    if (value4 < 50) throw new Error('Average age not 50 or above');
    else return value4;
  })
);

const observer = {
  next: (value) => console.log('Observer got a value ' + value),
  error: (error) => console.log('Observer got an error of ' + error),
  complete: () => console.log('Observer got completed'),
};

observable.subscribe(observer);
