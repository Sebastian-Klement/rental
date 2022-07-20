import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  currentUser: any;
  //TODO Rename UserList into UserProfile
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
    console.log('userlist: ' + this.currentUser);
  }
}
