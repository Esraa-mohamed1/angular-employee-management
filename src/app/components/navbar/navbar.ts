// Navbar Component - شريط التنقل
// RouterLink بيستخدم للتنقل بين الصفحات بدون reload
// RouterLinkActive بيضيف class للرابط النشط

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {}
