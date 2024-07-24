import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RootService } from 'src/app/Services/root.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
  loginForm !: FormGroup;

  constructor(private fb: FormBuilder, private service : RootService, private router : Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.service.loginUser(this.loginForm.value).subscribe(result =>
      {
        if(result.id){
          alert("Logged in successfully");
          this.router.navigate(['posts']);
        }
        alert("User not found.")
      }
      )
    }
  }
}
