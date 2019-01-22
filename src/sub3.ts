import { Observable } from "rxjs";

export default function sub3() {
    const source$ = new Observable(observer => {
        setTimeout(() => observer.next('Bob'), 1000);
        setTimeout(() => observer.next('Ali'), 3000);
        setTimeout(() => observer.complete(), 4000);
    });

    // Subscribe immediately
    source$.subscribe(
        value => console.log('first-subscribe-value', value),
        error => console.log('first-subscribe-error', error),
        () => console.log('first-subscribe-complete')
    );

    // Subscribe after 2s
    setTimeout(
        () => source$.subscribe(
            value => console.log('second-subscribe-value', value),
            error => console.log('second-subscribe-error', error),
            () => console.log('second-subscribe-complete')
        ),
        2000
    );

}

sub3();
