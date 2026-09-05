// Employee Details Component - صفحة تفاصيل موظف معين
// بنستخدم ActivatedRoute عشان نقرأ الـ id parameter من الـ URL

import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EmployeeService } from '../../services/employee';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-employee-details',
  imports: [RouterLink, Highlight],
  styleUrl: './employee-details.css',
  templateUrl: './employee-details.html',
})
export class EmployeeDetails {

  // حقن التبعيات (ActivatedRoute و EmployeeService)
  private route = inject(ActivatedRoute);
  private employeeService = inject(EmployeeService);

  // جلب الـ ID من مسار الصفحة (Route snapshot parameter)
  // تحويل النص إلى رقم باستخدام Number()
  // ثم البحث عن الموظف بالـ ID
  employee = this.employeeService.getemployeeId(
    Number(this.route.snapshot.paramMap.get('id'))
  );
}
