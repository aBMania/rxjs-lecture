import { Observable } from "rxjs";

export default function obs1() {
    const source$ = new Observable(observer => {
        observer.next('A');

        setTimeout(() => observer.next('B'), 1000);
        setTimeout(() => observer.next('C'), 2000);
        setTimeout(() => observer.complete(), 4000);
    });

    source$.subscribe(
        value => console.log(value),
        error => console.log('error', error),
        () => console.log('completed')
    );
}

obs1();
