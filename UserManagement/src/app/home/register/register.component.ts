import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RootService } from '../../root.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: RootService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.service.registerUser(this.registerForm.value).subscribe(
        user => {
          console.log('User added:', user);
          alert('Registered Successfully');
          this.router.navigate(['users']);
        },
        error => {
          console.error('Error registering user:', error);
          // Handle error appropriately
        }
      );
    } else {
      // Mark all fields as touched to trigger validation messages
      this.registerForm.markAllAsTouched();
    }
  }
}
