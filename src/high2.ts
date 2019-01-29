import { ConnectableObservable, EMPTY, Observable } from "rxjs";
import { publish, switchMap } from "rxjs/operators";

const user1tweets$ = new Observable<string>(observer => {
    observer.next('A');

    setTimeout(() => observer.next('B'), 1500);
    setTimeout(() => observer.next('C'), 2000);
    setTimeout(() => observer.next('D'), 3000);
    setTimeout(() => observer.next('E'), 4000);
    setTimeout(() => observer.next('F'), 4500);
}).pipe(
    publish()
) as ConnectableObservable<string>; // https://github.com/ReactiveX/rxjs/issues/2972

const user2tweets$ = new Observable<string>(observer => {
    setTimeout(() => observer.next('α'), 500);
    setTimeout(() => observer.next('β'), 3000);
    setTimeout(() => observer.next('γ'), 4200);
}).pipe(
    publish()
) as ConnectableObservable<string>; // https://github.com/ReactiveX/rxjs/issues/2972

const selection$ = new Observable<number>(observer => {
    setTimeout(() => observer.next(1), 1000);
    setTimeout(() => observer.next(2), 2500);
});

function getUserTweets(user: number): Observable<string> {
    switch (user) {
        case 1:
            return user1tweets$;
        case 2:
            return user2tweets$;
        default:
            return EMPTY;
    }
}

export default function high2() {
    // Users start to send tweets
    user1tweets$.connect();
    user2tweets$.connect();

    const tweetFeed$ = selection$.pipe(
        switchMap(user => getUserTweets(user))
    );

    tweetFeed$.subscribe(tweet => console.log('tweet:', tweet));
}

high2();
