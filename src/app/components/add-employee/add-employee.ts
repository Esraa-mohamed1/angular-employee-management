// Add Employee Component - صفحة إضافة موظف جديد باستخدام Reactive Forms

import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee';

@Component({
  selector: 'app-add-employee',
  imports: [ReactiveFormsModule],
  styleUrl: './add-employee.css',
  templateUrl: './add-employee.html',
})
export class AddEmployee {
  private employeeService = inject(EmployeeService);
  private router = inject(Router);

  employeeForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/)
    ]),
    department: new FormControl('', [
      Validators.required
    ]),
    salary: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(5000)
    ])
  });

  submit(): void {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    const employee = this.employeeForm.getRawValue() as any;
    this.employeeService.addEmployee(employee).subscribe({
      next: () => {
        this.employeeForm.reset();
        this.router.navigate(['/employees']);
      },
      error: (err) => {
        console.error('Error adding employee', err);
        // Fallback for demo when backend API isn't live
        this.router.navigate(['/employees']);
      }
    });
  }
}

























