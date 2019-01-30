import { Observable } from "rxjs";

/**
 *
 * Rule:
 *   - Filter out even values
 *   - On error, recover and complete. (hint: https://www.learnrxjs.io/operators/error_handling/catch.html)
 *
 * Examples:
 * 1-2-3-# input$
 * 1---3-| result$ (wanted output)
 *
 * 1234--- input$
 * 1-3---- result$
 *
 * #------ input$
 * |------ result$
 */
export const medium = (input$: Observable<number>): Observable<number> => {
    // Compute result$ from input$ and return it
    const result$ = input$ as Observable<number>;

    return result$;
};
