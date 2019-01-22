import { interval } from "rxjs";
import { tap } from "rxjs/operators";

export default function op4() {

    const source$ = interval(1000); // Emit a value every seconds: 0, 1, 2, 3, ...

    const result$ = source$.pipe(
        tap(value => console.log('value in tap', value)) // Take only the first value of source
    );

    result$.subscribe(
        value => console.log(value),
        error => console.log('error', error),
        () => console.log('completed')
    );
}

op4();
