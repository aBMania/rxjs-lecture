import { interval } from "rxjs";
import { take } from "rxjs/operators";

function getAnObservable() {
    return interval(1000).pipe(
        take(3)
    );
}

export default function rxjs1() {

    // Ignore myTimer$ declaration for now, just focus on the subscribe call
    const myTimer$ = getAnObservable();

    myTimer$.subscribe(
        value => console.log(value),
        error => console.log('error', error),
        () => console.log('completed')
    );
}

rxjs1();
