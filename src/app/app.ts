// App Component - الـ Component الرئيسي للتطبيق
// router-outlet هو المكان اللي Angular بتحط فيه الـ Component بتاع الـ route الحالي

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

@Component({
  imports: [RouterOutlet, Navbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
