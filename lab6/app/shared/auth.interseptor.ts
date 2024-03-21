<<<<<<< HEAD
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Injectable()

export class AuthInterseptor implements HttpInterceptor{
    constructor(
        private auth: AuthService,
        private router: Router
    ){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.auth.isAuthenicated()){
            req = req.clone({
                setParams: {
                    auth: this.auth.Token
                }
            })
            // console.log(this.auth.Token);
            
        }
        return next.handle(req)
        .pipe(
            catchError(error =>{
                if(error.status === 401){
                    this.auth.logout()
                    this.router.navigate(['/admin', 'login'])
                }
                return throwError(error)
            })
        )
    }
}

=======
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Injectable()

export class AuthInterseptor implements HttpInterceptor{
    constructor(
        private auth: AuthService,
        private router: Router
    ){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.auth.isAuthenicated()){
            req = req.clone({
                setParams: {
                    auth: this.auth.Token
                }
            })
            // console.log(this.auth.Token);
            
        }
        return next.handle(req)
        .pipe(
            catchError(error =>{
                if(error.status === 401){
                    this.auth.logout()
                    this.router.navigate(['/admin', 'login'])
                }
                return throwError(error)
            })
        )
    }
}

>>>>>>> 78668f55cf726fc0e7ee6bf74a94e0409fbd2f82
