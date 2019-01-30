import { Observable } from "rxjs";


/**
 * Rule:
 * Map every input value to the corresponding character
 *
 * Input
 * 1--2----3---| input$
 * a--b----c---| result$ (wanted result)
 */

export const easy = (input$: Observable<number>): Observable<string> => {
    // Compute result$ from input$ and return it
    const result$ = input$ as unknown as Observable<string>;

    return result$;
};
