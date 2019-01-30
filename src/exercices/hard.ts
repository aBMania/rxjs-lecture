import { NEVER, Observable } from "rxjs";

/**
 * Rule :
 *  - When a in input 1, emit input 2 in the output after a 2ms delay
 *  - When b in input 1, emit an error in the output
 *  - Ignore any other values of input 1
 *
 * Examples:
 *
 * a------------------ input 1
 * 1--2--3|----------- input2
 * --1--2--3---------- output
 *
 *
 * b------------------ input 1
 * ------------------- input 2
 * #------------------ output
 *
 *
 * a-------a-------b-| input 1
 * 12345|------------- input 2
 * --12345---12345-#-- output
 *
 *
 * aa----------------| input 1
 * 123|--------------- input 2
 * --123--123--------| output
 *
 * Note: use "error" as error object
 *
 * Hints:
 *   - concatMap (https://www.learnrxjs.io/operators/transformation/concatmap.html)
 *   - delay (https://www.learnrxjs.io/operators/utility/delay.html)
 *   - throwError() (https://www.learnrxjs.io/operators/creation/throw.html)
 */
export const hard = (input1$: Observable<string>, input2$: Observable<number>): Observable<number> => {
    // Compute result$ from input1$ and input2$, then return it
    return NEVER;
};
