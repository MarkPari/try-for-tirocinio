import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.logInForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  login = () => {
    const auth = this.auth.login(this.logInForm.controls['username'].value, this.logInForm.controls['password'].value)
    auth.subscribe(({token})=> {
      this.auth.setMyToken(token);
      this.router.navigate(['Home'])
    });
    
  }

}
