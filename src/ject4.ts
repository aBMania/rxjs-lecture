import { interval, Subject } from "rxjs";

export default function ject4() {

    const source$ = interval(1000);
    const subject$ = new Subject();

    source$.subscribe(subject$);

    subject$.subscribe(
        value => console.log(value),
        error => console.log('error', error),
        () => console.log('completed')
    );
}

ject4();
