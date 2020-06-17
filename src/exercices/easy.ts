import { Observable } from "rxjs";
import {map} from "rxjs/operators";


/**
 * Rule:
 * Map every input value to the corresponding character
 *
 * Input
 * 1--2----3---| input$
 * a--b----c---| result$ (wanted result)
 */

export const easy = (input$: Observable<number>): Observable<string> => {
    return input$.pipe(
        map(int => String.fromCharCode(int + 96))
    )
};
