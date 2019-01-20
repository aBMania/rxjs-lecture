import { interval } from "rxjs";
import { first } from "rxjs/operators";

export default function ex8() {

    const source$ = interval(1000); // Emit a value every seconds: 0, 1, 2, 3, ...

    const result$ = source$.pipe(
        first() // Take only the first value of source
    );

    result$.subscribe(
        value => console.log(value),
        error => console.log('error', error),
        () => console.log('completed')
    );
}

ex8();
