import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  defaultUsername = 'superadmin';
  defaultPassword = 'coolbeans123';
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
   });

   error?: string;

  constructor(private fb: FormBuilder,
       
              private router: Router) {
  }

  login(): void {
      const val = this.form.value;

      // if (val.username && val.password) {
      //     this.authService.login(val.username, val.password)
      //         .subscribe(
      //             (token) => {
      //                 // save token to local storage
      //                 this.error = undefined;
      //                 this.router.navigateByUrl('/');
      //             },
      //           error => {
      //               if (error.error.error_type === 'invalid_id') {
      //                 this.error = 'Invalid username';
      //               } else if (error.error.error_type === 'bad_password') {
      //                 this.error = 'Invalid password';
      //               } else {
      //                 this.error = 'Invalid username or password';
      //               }

      //               this.authService.logout();
      //             }
      //         );
      // }
  }
}
