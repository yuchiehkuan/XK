import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      password: ['', Validators.pattern('^[a-zA-Z0-9-_]{1,20}')],
    });
    if (sessionStorage.getItem('login')) {
      this.router.navigate(['/home']);
    }
  }
  get password() {
    return this.form.get('password');
  }

  login() {
    if (this.form.get('password').value === 'xk0712') {
        this.snackbar.open('登入成功', 'OK', { duration: 3000 });
        sessionStorage.setItem('login', 'login');
        this.router.navigate(['/home']);
    } else {
      this.snackbar.open('密碼錯誤！', 'OK', { duration: 3000 });
    }
  }
}
