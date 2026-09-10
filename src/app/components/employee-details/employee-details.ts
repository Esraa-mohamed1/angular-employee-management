// Employee Details Component - صفحة تفاصيل موظف معين

import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { EmployeeService } from '../../services/employee';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-employee-details',
  imports: [RouterLink, Highlight, AsyncPipe],
  styleUrl: './employee-details.css',
  templateUrl: './employee-details.html',
})
export class EmployeeDetails {
  private route = inject(ActivatedRoute);
  private employeeService = inject(EmployeeService);

  employee$ = this.employeeService.getEmployeeById(
    Number(this.route.snapshot.paramMap.get('id'))
  );
}

