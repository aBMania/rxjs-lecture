import { interval, of, throwError } from "rxjs";
import { switchMap } from "rxjs/operators";

function getAnObservableWithError() {
    return interval(1000).pipe(
        switchMap(value => value < 2 ? of(value) : throwError({message: 'my error message'}))
    );
}

export default function ex2() {

    // Ignore myTimer$ declaration for now, just focus on the subscribe call
    const myTimer$ = getAnObservableWithError();

    myTimer$.subscribe(
        value => console.log(value),
        error => console.log('error', error),
        () => console.log('completed')
    );
}

ex2();
