import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  
  onSubmit() {
    console.log('Form submitted');
    if(this.loginForm.valid) {
      console.log('Form is valid');
      this.authService.login(this.loginForm.value)
        .subscribe(
          () => {
            console.log('Login success');
            this.router.navigate([this.route.snapshot.queryParams['returnUrl'] || '/home']);
          },
          (error) => {
            console.error('Login error: ', error);
          }
        );
    }
  }
}
