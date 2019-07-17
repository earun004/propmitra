import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'config/config';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/do';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }
    
    login(email:string, password:string ) {
        return this.http.post<any>(config.API_URL+'/auth/signin', {"usernameOrEmail":email, "password":password}, {observe: 'response'})
            .do(res => this.setSession(res.body))
            .shareReplay();
    }

    private setSession(authResult) {
        console.log('authResult123', authResult);
        const expiresAt = moment(authResult.expiresIn).utc();
        //console.log('expiresAt', expiresAt);
        localStorage.setItem('id_token', authResult.accessToken);
        localStorage.setItem('type_token', authResult.tokenType);
        localStorage.setItem('has_role', authResult.hasRole);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }          

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("type_token");
        localStorage.removeItem("expires_at");
        localStorage.removeItem("has_role");
    }

    public isLoggedIn() {
        //console.log("current utc", moment().utc());
        //console.log("expire utc", this.getExpiration());
        return moment().utc().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }

}
