import { interval } from "rxjs";

export default function sub1() {
    // Create an observable that emit value every seconds
    const source$ = interval(1000); // 0, 1, 2, 3, ...

    const subscription = source$.subscribe(
        value => console.log(value),
        error => console.log('error', error),
        () => console.log('completed')
    );

    // Unsubscribe after 5 seconds
    setTimeout(
        () => {
            console.log('Unsubscribe');
            subscription.unsubscribe();
        },
        5500
    );
}

sub1();
