import { ConnectableObservable, interval } from "rxjs";
import { map, publish, startWith, take } from "rxjs/operators";

export default function sub4() {
    const hotSource$ = interval(1000).pipe(
        map(i =>  `C${i+2}`),
        startWith('C1'),
        take(5),
        publish()
    ) as ConnectableObservable<string>;

    hotSource$.connect();

    // Subscriber 1
    hotSource$.subscribe(
        value => console.log('first-subscribe-value', value),
        error => console.log('first-subscribe-error', error),
        () => console.log('first-subscribe-complete')
    );

    // Subscriber 2
    setTimeout(
        () => hotSource$.subscribe(
            value => console.log('second-subscribe-value', value),
            error => console.log('second-subscribe-error', error),
            () => console.log('second-subscribe-complete')
        ),
        2500
    );
}

sub4();
