import { interval } from "rxjs";
import { map } from "rxjs/operators";

export default function ex6() {

    const source$ = interval(1000); // Emit a value every seconds: 0, 1, 2, 3, ...

    const result$ = source$.pipe(
        map(x => 10 * x) // Map x to 10x
    );

    result$.subscribe(
        value => console.log(value),
        error => console.log('error', error),
        () => console.log('completed')
    );
}

ex6();
