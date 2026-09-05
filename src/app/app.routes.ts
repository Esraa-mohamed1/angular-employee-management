// App Routes - تعريف مسارات التطبيق
// كل route بيربط URL معين بـ Component معين

import { Routes } from '@angular/router';

export const routes: Routes = [

  // الصفحة الرئيسية - بتحول تلقائياً لصفحة الموظفين
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full'
    // pathMatch: 'full' يعني لازم الـ URL يطابق '' بالظبط
  },

  // صفحة عرض كل الموظفين
  // loadComponent = Lazy Loading (التحميل الكسول)
  // الـ Component مش بيتحمل إلا لما المستخدم يدخل الصفحة دي
  {
    path: 'employees',
    loadComponent: () =>
      import('./components/employees/employees').then(m => m.Employees)
  },

  // صفحة تفاصيل موظف واحد
  // :id = parameter متغير (مثلاً /employees/5)
  {
    path: 'employees/:id',
    loadComponent: () =>
      import('./components/employee-details/employee-details').then(m => m.EmployeeDetails)
  },

  // صفحة إضافة موظف جديد
  {
    path: 'add-employee',
    loadComponent: () =>
      import('./components/add-employee/add-employee').then(m => m.AddEmployee)
  }

];
