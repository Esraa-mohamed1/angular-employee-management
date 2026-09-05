
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { EmployeeService } from '../../services/employee';
import { Highlight } from '../../directives/highlight';
@Component({
  selector: 'app-employees',
  imports: [RouterLink, Highlight,AsyncPipe],
  styleUrl: './employees.css',
  templateUrl: './employees.html',
})
export class Employees {
  private employeeservice = inject(EmployeeService);

employee$ = this.employeeservice.getemployee();



updateEmployee(id:number, employee:any):void{
  

  this.employeeservice.updateemployee(id,employee).subscribe({
    next:()=>{
      console.log('employee updated')
    },
    error:error=>(console.error('updated failed',error))

  })
}

}
