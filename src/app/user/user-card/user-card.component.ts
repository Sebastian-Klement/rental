import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  showPassword: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  user: IUser = {
    id: 0,
    username: 'username',
    email: 'email',
    password: 'password',
  };

  ngOnInit(): void {
    var id = 1;
    // var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.userService.getUserById(id).subscribe((result) => {
      this.user = result;
      console.log(this.user.email);
    });
  }

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }
}
