import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import {  authservice } from '../services/auth-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

const Authservice= inject(authservice);
const token=  Authservice.getaccesstoken();
if(!token){
  return next(req);
}

const authrequest= req.clone({
  setHeaders:{
  Authorization: `Bearer ${token}`
}});
return next(authrequest)






};
