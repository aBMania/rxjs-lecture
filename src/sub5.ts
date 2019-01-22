import { Observable } from "rxjs";

interface User {
    firstName: string,
    lastName: string
}

function getUserFromServer(callback: (user: User) => void) {
    // Fake server request
    setTimeout(
        () => callback({
            firstName: '',
            lastName: ''
        }),
        1000
    );
}

export default function sub5() {
    const user$ = new Observable<User>(observer => {
        getUserFromServer(user => {
            observer.next(user);
            observer.complete();
        });
    });

    user$.subscribe(user => console.log('user first name', user.firstName));
    user$.subscribe(user => console.log('user last name', user.lastName));

    // Subscribing twice will send two request to the server !!
}

sub5();
