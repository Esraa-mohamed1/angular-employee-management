import { Injectable, inject } from '@angular/core';
import { Authresponse } from '../models/auth-response';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class authservice {

private http = inject(HttpClient);

    private apiUrl = 'https://jsonplaceholder.typicode.com/auth';

    private accesstoken:string|null=null;

    login(
      email:string,password:string
    ): Observable<Authresponse>{
return this.http.post<Authresponse>(`${this.apiUrl}/login`,{email,password},{withCredentials:true}).pipe(
  tap(Response =>{this.accesstoken=Response.accessToken;})
  
)

    }


    getaccesstoken():string | null{ 
return this.accesstoken;
    }





      refreshtoken(
    ): Observable<Authresponse>{
return this.http.post<Authresponse>(`${this.apiUrl}/refresh`,{withCredentials:true}).pipe(
  tap(Response =>{this.accesstoken=Response.accessToken;})
  
)

    }



    
      logout(
    ): Observable<Authresponse>{
return this.http.post<Authresponse>(`${this.apiUrl}/logout`,{},{withCredentials:true}).pipe(
  tap(() => {   this.accesstoken= null;})
)  
    }

 
    clearaccesstoken():void{
      this.accesstoken= null;
    }

}