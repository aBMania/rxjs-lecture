import { ConnectableObservable, EMPTY, Observable } from "rxjs";
import { mergeMap, publish } from "rxjs/operators";

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

// Helper function to get a user tweet observable based on his id
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

const follow$ = new Observable<number>(observer => {
    setTimeout(() => observer.next(1), 1000);
    setTimeout(() => observer.next(2), 2500);
});

export default function high1() {
    // Users start to send tweets
    user1tweets$.connect();
    user2tweets$.connect();

    const feed$ = follow$.pipe(
        mergeMap(user => getUserTweets(user))
    );

    feed$.subscribe(tweet => console.log('tweet:', tweet));
}

high1();
