
import { Injectable, inject } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private http =inject(HttpClient);

  private apiUrl='https://api.github.com/user';

  getemployee():Observable<Employee[]>{

    return this.http.get<Employee[]>(
    this.apiUrl);
  }

  getemployeeId(id:number):Observable<Employee>{
    return this.http.get<Employee>(
    `${this.apiUrl}/${id}`);
  }


  

updateemployee(id:number,employee:Omit<Employee,'id'>):Observable<Employee>{

  return this.http.put<Employee>(
    `${this.apiUrl}/${id}`, employee
  );
}


}