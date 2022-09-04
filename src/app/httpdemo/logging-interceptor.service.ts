import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class LoggingInterceptorService implements HttpInterceptor{
 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  console.log("Outgoing request");
  console.log(req.url);
  console.log(req.headers);

  return next.handle(req).pipe(tap(event => {
    console.log(event);
    if(event.type === HttpEventType.Response) {
      console.log('Incoming Response', event.body);
    }
  }));
 }
}
