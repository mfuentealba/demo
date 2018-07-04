import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';
import { User } from '../models/user';
import { GLOBAL } from './global';

@Injectable()
export class UserService{
    public url:string;
    public identity:User;
    public token:any;
    public stats:any;

    constructor(
        public _http:HttpClient
    ){
        this.url = GLOBAL.url;
    }

    register(user:User):Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'registerUser', params, {headers: headers});
    }

    signup(user:User, gettoken = null):Observable<any>{

        if(gettoken){
            user.gettoken = gettoken;
        }
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'loginUser', params, {headers: headers});
    }

    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));
        if(identity != "undefined"){
            this.identity = identity;
        } else {
            this.identity = null;
        }
        return this.identity;
    }

    gettoken(){
        let token = JSON.parse(localStorage.getItem('token'));
        if(token != "undefined"){
            this.token = token;
        } else {
            this.token = null;
        }
        return this.token;
    }

    getStats(){
        let stats = JSON.parse(localStorage.getItem('stats'));
        console.log("getStats");


        console.log(stats);
        if(stats != 'undefined'){
            this.stats = stats
        } else {
            this.stats = null;
        }
        return this.stats;
    }

    getCounters(userId = null):Observable<any>{
        console.log("getCounters");
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', this.gettoken());

        if(userId){
            return this._http.get(this.url + 'counters/' + userId,{headers: headers});
        } else {
            return this._http.get(this.url + 'counters', {headers: headers});
        }

    }

    updateUser(user:User):Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', this.gettoken());
        return this._http.put(this.url + 'userUpdate/' + user._id, params, {headers: headers});
    }

    getUsers(page = null):Observable<any>{

        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', this.gettoken());
        return this._http.get(this.url + 'users/' + page, {headers: headers});
    }

    getUser(id = null):Observable<any>{

        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', this.gettoken());
        return this._http.get(this.url + 'user/' + id, {headers: headers});
    }
}
