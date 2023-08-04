import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  logUsuario: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private afAuth: AngularFireAuth, 
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseErrorService
    ){
      this.logUsuario = this.fb.group({
        email:['', Validators.required],
        password:['', Validators.required],
      })
     }

  ngOnInit(): void { }

  login(){
    const email = this.logUsuario.value.email;
    const password = this.logUsuario.value.password;

    this.loading = true;
    this.afAuth.signInWithEmailAndPassword(email,password).then((user)=>{
      if(user.user?.emailVerified){
        this.router.navigate(['/home']);
      }else{
        this.router.navigate(['/verificar-correo']);
      }
      
    }).catch((error)=>{
      this.loading = false;
      alert(this.firebaseError.codeError(error.code));
    })
  }

}
