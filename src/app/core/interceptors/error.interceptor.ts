import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, catchError, map } from "rxjs";

export function erroInterceptor(
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
): Observable<HttpEvent<unknown>>{
 
    return next(req).pipe(
        catchError(err =>{
            if(err.status === 404){
                alert('risorsa non trovata!')
            }
           
            throw new Error(err)
        })
    )
}