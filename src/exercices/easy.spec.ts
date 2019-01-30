import { TestScheduler } from 'rxjs/testing';
import { easy } from "./easy";

describe('easy', () => {
    let scheduler: TestScheduler;

    beforeEach(() => {
        scheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });


    it('should return expected output', () => {
        scheduler.run(helpers => {
            const {cold, expectObservable} = helpers;
            const inputValues = {1: 1, 2: 2, 3: 3};

            const input$ = cold('1--2----3---|', inputValues);
            const expected =    'a--b----c---|';


            expectObservable(easy(input$)).toBe(expected);
        });
    });

});
