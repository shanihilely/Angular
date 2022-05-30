import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public username: string = '';
  public password: string = '';

  public message: string = '';

  constructor(private userService: UserService,
    private router: Router) { }


  register() {
    this.userService.register(this.username, this.password).subscribe((resp) => {
      console.log('Successfully registered');
      this.message = resp.msg;
      this.router.navigate(['login']);
    });
  }

}
