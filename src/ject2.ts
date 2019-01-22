import { ReplaySubject } from "rxjs";

export default function ject2() {
    const source$ = new ReplaySubject<string>(1);

    source$.next('A');

    setTimeout(() => source$.next('B'), 1000);
    setTimeout(() => source$.next('C'), 2000);
    setTimeout(() => source$.complete(), 4000);

    source$.subscribe(
        value => console.log('subscriber1-value', value),
        error => console.log('subscriber1-error', error),
        () => console.log('subscriber1-completed')
    );

    setTimeout(
        () => {
            source$.subscribe(
                value => console.log('subscriber2-value', value),
                error => console.log('subscriber2-error', error),
                () => console.log('subscriber2-completed')
            );
        },
        1500
    );
}

ject2();
