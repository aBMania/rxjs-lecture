import { interval } from "rxjs";
import { filter } from "rxjs/operators";

export default function op2() {

    const source$ = interval(1000); // Emit a value every seconds: 0, 1, 2, 3, ...

    const result$ = source$.pipe(
        filter(x => x % 2 === 0) // Filter only odd values
    );

    result$.subscribe(
        value => console.log(value),
        error => console.log('error', error),
        () => console.log('completed')
    );
}

op2();
