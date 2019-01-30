import { TestScheduler } from 'rxjs/testing';
import { hard } from "./hard";


describe('hard', () => {
    let scheduler: TestScheduler;

    beforeEach(() => {
        scheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('should return expected output from example 1', () => {
        scheduler.run(helpers => {
            const {cold, expectObservable} = helpers;
            const inputValues = {1: 1, 2: 2, 3: 3};

            const input1$ = cold('a------------------');
            const input2$ = cold('1--2--3|-----------', inputValues);
            const expected =     '--1--2--3----------';


            expectObservable(hard(input1$, input2$)).toBe(expected, inputValues);
        });
    });


    it('should return expected output from example 2', () => {
        scheduler.run(helpers => {
            const {cold, expectObservable} = helpers;
            const inputValues = {1: 1, 2: 2, 3: 3};

            const input1$ = cold('b------------------');
            const input2$ = cold('-------------------', inputValues);
            const expected =     '#------------------';


            expectObservable(hard(input1$, input2$)).toBe(expected, inputValues);
        });
    });

    it('should return expected output from example 3', () => {
        scheduler.run(helpers => {
            const {cold, expectObservable} = helpers;
            const inputValues = {1: 1, 2: 2, 3: 3, 4:4, 5:5};

            const input1$ = cold('a-------a-------b-|');
            const input2$ = cold('12345|-------------', inputValues);
            const expected =     '--12345---12345-#--';


            expectObservable(hard(input1$, input2$)).toBe(expected, inputValues);
        });
    });


    it('should return expected output from example 4', () => {
        scheduler.run(helpers => {
            const {cold, expectObservable} = helpers;
            const inputValues = {1: 1, 2: 2, 3: 3};

            const input1$ = cold('aa----------------|');
            const input2$ = cold('123|---------------', inputValues);
            const expected =     '--123--123--------|';


            expectObservable(hard(input1$, input2$)).toBe(expected, inputValues);
        });
    });
});
