import { Observable } from "rxjs";

interface FakeRequest {
    cancel: () => void;
}

function request(onResponse: (response: any) => void): FakeRequest {
    const timeout = setTimeout(
        () => onResponse('response'),
        2000
    );

    return {
        cancel: () => clearTimeout(timeout)
    }
}

export default function sub2() {

    const source$ = new Observable(observer => {
        const myRequest = request(
            response => observer.next(response)
        );

        return () => myRequest.cancel();
    });

    const subscription = source$.subscribe(
        value => console.log(value),
        error => console.log('error', error),
        () => console.log('completed')
    );

    setTimeout(
        () => subscription.unsubscribe(),
        1000
    );
}

sub2();
