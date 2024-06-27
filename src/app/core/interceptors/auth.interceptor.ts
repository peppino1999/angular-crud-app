import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, catchError, map } from "rxjs";

export function authInterceptor(
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
): Observable<HttpEvent<unknown>>{
    console.log('authInterceptor')
    const withAuth = req.clone({
      headers: new HttpHeaders({
        'Authorization': 'Bearer 123456778'
      })
    })
    return next(withAuth)
}