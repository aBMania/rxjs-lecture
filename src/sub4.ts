import { Observable } from "rxjs";
import { share } from "rxjs/operators";

export default function sub4() {
    const coldSource$ = new Observable(observer => {
        setTimeout(() => observer.next('Bob'), 1000);
        setTimeout(() => observer.next('Ali'), 3000);
        setTimeout(() => observer.complete(), 4000);
    });

    // Trasnform the cold Observable to an hot one
    const hotSource$ = coldSource$.pipe(
        share()
    );

    // Subscribe immediately
    hotSource$.subscribe(
        value => console.log('first-subscribe-value', value),
        error => console.log('first-subscribe-error', error),
        () => console.log('first-subscribe-complete')
    );

    // Subscribe after 2s
    setTimeout(
        () => hotSource$.subscribe(
            value => console.log('second-subscribe-value', value),
            error => console.log('second-subscribe-error', error),
            () => console.log('second-subscribe-complete')
        ),
        2000
    );
}

sub4();
