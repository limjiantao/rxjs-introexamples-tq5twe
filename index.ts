import { of, range, from, fromEvent, merge, zip } from 'rxjs';
import { last, filter, scan, map, mergeMap } from 'rxjs/operators';

setTimeout(() => {
  const e = document.getElementsByTagName('h1');
  fromEvent(document, 'mousedown').subscribe(console.log);
});

/*
console.log("Observable of parameters:")

of(1,2,3,4)
  .subscribe(console.log)

from([1,2,3])
  .subscribe(console.log)

console.log("Squares of even numbers in the range [0,10):")

range(10)
  .pipe(
    filter(x=>x%2===0),
    map(x=>x*x))
  .subscribe(console.log)

console.log("solution to the first Project Euler problem, the sum of numbers divisible by 3 or 5 under 1000:")

range(1000)
  .pipe(
    filter(x=> x%3===0 || x%5===0),
    scan((a,v)=>a+v),
    last())
  .subscribe(console.log);

console.log("mergeMap of two Observables:")

const 
  columns = of('A','B','C'),
  rows = range(3);

columns.pipe(
  mergeMap(column=>rows.pipe(
    map(row=>[row,column])
  ))
).subscribe(console.log)

console.log("merge of two Observables:")

merge(columns,rows)
  .subscribe(console.log)

zip(columns,rows).subscribe(console.log)

console.log("Asynchronous Observables:")

const 
  key$ = fromEvent<KeyboardEvent>(document,"keydown"),
  mouse$ = fromEvent<MouseEvent>(document,"mousedown");

key$.pipe(
  map(e=>e.key)
).subscribe(console.log)


mouse$.pipe(
  map(_=>"Mouse Click!")
).subscribe(console.log)

merge(key$.pipe(map(e=>e.key)),
      mouse$.pipe(map(_=>"Mouse Click!"))
).subscribe(console.log)
*/
