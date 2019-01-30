import { TestScheduler } from 'rxjs/testing';
import { medium } from "./medium";

describe('medium', () => {
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

            const input$ = cold('1-2-3-#', inputValues);
            const expected =    '1---3-|';


            expectObservable(medium(input$)).toBe(expected, inputValues);
        });
    });

    it('should return expected output from example 2', () => {
        scheduler.run(helpers => {
            const {cold, expectObservable} = helpers;
            const inputValues = {1: 1, 2: 2, 3: 3, 4:4};

            const input$ = cold('1234---', inputValues);
            const expected =    '1-3----';


            expectObservable(medium(input$)).toBe(expected, inputValues);
        });
    });

    it('should return expected output from example 3', () => {
        scheduler.run(helpers => {
            const {cold, expectObservable} = helpers;

            const input$ = cold<number>('#------');
            const expected =            '|------';


            expectObservable(medium(input$)).toBe(expected);
        });
    });
});
