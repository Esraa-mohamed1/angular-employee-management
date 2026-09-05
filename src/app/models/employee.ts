// Employee Interface - بيحدد شكل بيانات الموظف
// كل موظف لازم يكون عنده كل الـ properties دي

export interface Employee {
  id: number;           
  firstName: string;    
  lastName: string;    
  email: string;        
  phone: string;      
  department: string;   
  salary: number;       
}
