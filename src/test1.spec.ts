import { TestScheduler } from 'rxjs/testing';
import { delay } from "rxjs/operators";

const scheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
});

// This test will actually run *synchronously*
it('generate the stream correctly', () => {
    scheduler.run(helpers => {
        const {cold, expectObservable, expectSubscriptions} = helpers;
        const e1 =  cold('-a--b--c---|');
        const subs =     '^----------!';
        const expected = '----a--b--c---|';


        expectObservable(e1.pipe(delay(3, scheduler))).toBe(expected);
        expectSubscriptions(e1.subscriptions).toBe(subs);
    });
});
