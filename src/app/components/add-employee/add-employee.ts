// // Add Employee Component - صفحة إضافة موظف جديد باستخدام Reactive Forms
// // Reactive Forms بتدينا تحكم كامل في الـ validation والـ form state من TypeScript

import { Component } from '@angular/core';
import {
  FormGroup,FormControl,ReactiveFormsModule,Validators } from '@angular/forms';
import { submit, validate } from '@angular/forms/signals';

@Component({
  selector: 'app-add-employee',
  imports: [  FormControl,FormGroup,ReactiveFormsModule,Validators],
  styleUrl: './add-employee.css',
  templateUrl: './add-employee.html',
})
export class AddEmployee {
 employeeForm= new FormGroup({

firstname: new FormControl('',[
  Validators.required,
  Validators.minLength(2)
]),

lastname: new FormControl('',[
  Validators.required,
  Validators.minLength(2)
]),


email: new FormControl('',[
  Validators.required,
  Validators.minLength(2),
    Validators.pattern("^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$")
]),
phone: new FormControl('',[
  Validators.required,
  Validators.min(11)
]),
salary: new FormControl('',[
  Validators.required,
  Validators.min(8000)
]),
 })


submit():void{

if(this.employeeForm.invalid){

  this.employeeForm.markAllAsTouched();
  return;
}
console
}
}



//  Validators.pattern(regex)
 










// empolyee={
//   firstName:'',
//   lastName:'',
//   email:'',
//   phone:'',
//   department:'',
//   salary:null as number | null
// }

// submit(form:any):void{
// if(form.invalid){
//   return;
// }
// console.log(this.empolyee);}


//   // Dependency Injection
//   private employeeService = inject(EmployeeService);
//   private router = inject(Router);

//   // إنشاء الـ FormGroup وبداخله كل الـ FormControls مع الـ Validators
//   employeeForm = new FormGroup({

//     // الاسم الأول: مطلوب + على الأقل حرفين
//     firstName: new FormControl('', [
//       Validators.required,
//       Validators.minLength(2)
//     ]),

//     // الاسم الأخير: مطلوب + على الأقل حرفين
//     lastName: new FormControl('', [
//       Validators.required,
//       Validators.minLength(2)
//     ]),

//     // البريد الإلكتروني: مطلوب + إيميل صحيح
//     email: new FormControl('', [
//       Validators.required,
//       Validators.email
//     ]),

//     // الهاتف: مطلوب + رقم هاتف مصري صحيح (010/011/012/015 متبوع بـ 8 أرقام)
//     phone: new FormControl('', [
//       Validators.required,
//       Validators.pattern(/^01[0125][0-9]{8}$/)
//     ]),

//     // القسم: مطلوب
//     department: new FormControl('', [
//       Validators.required
//     ]),

//     // المرتب: مطلوب + لا يقل عن 5000
//     salary: new FormControl<number | null>(null, [
//       Validators.required,
//       Validators.min(5000)
//     ])

//   });

//   // عند تقديم النموذج (Form Submission)
//   submit(): void {

//     // لو النموذج فيه أي خطأ، نعلم كل الحقول كـ touched عشان تظهر الأخطاء للمستخدم
//     if (this.employeeForm.invalid) {
//       this.employeeForm.markAllAsTouched();
//       return;
//     }

//     // تجهيز كائن الموظف الجديد
//     // Date.now() بيعمل ID فريد بناءً على الوقت الحالي
//     // getRawValue() بترجع كائن يحتوي على كل قيم الفيلدات
//     const employee = {
//       id: Date.now(),
//       ...this.employeeForm.getRawValue()
//     } as any;

//     // إضافة الموظف من خلال الـ Service
//     this.employeeService.addEmployee(employee);

//     // إعادة تصفير الفورم
//     this.employeeForm.reset();

//     // التوجيه لصفحة قائمة الموظفين
//     this.router.navigate(['/employees']);
//   }
// }
























