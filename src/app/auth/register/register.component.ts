import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  users: User[] = [];

  user: User = {
    id: null,
    username: 'Add your username',
    email: 'Add your email',
    password: 'Add your password',
  };

  ngOnInit(): void {
    this.authService.getUser().subscribe((result) => {
      this.users = result;
    });
  }

  register(): void {
    this.authService.addUser(this.user).subscribe(() => {
      this.router.navigate(['/auth/login'], {
        queryParams: { registered: 'success' },
      });
    });
  }
}
