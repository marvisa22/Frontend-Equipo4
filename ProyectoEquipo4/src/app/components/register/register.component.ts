import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  /*rutaArchivo: string = '../../../doc/politica-protección-de-datos-Plural-Cafe.pdf';*/
  register: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseErrorService
  ) {

    this.register = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmarpassword: ['', Validators.required],
    })
  }

  ngOnInit(): void {

  }

  registrar() {
    const email = this.register.value.email;
    const password = this.register.value.password;
    const confirmarpassword = this.register.value.confirmarpassword;

    if (password !== confirmarpassword) {
      alert('Las comtraseñas no coinciden');
      return;
    }
    this.loading = true;
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.verificarCorreo();

      }).catch((error) => {
        this.loading = false;
        alert(this.firebaseError.codeError(error.code));
      })
  }

  verificarCorreo() {
    this.afAuth.currentUser.then(user => user?.sendEmailVerification())
      .then(() => {
        alert('Le enviamos un correo electronico para su verificación');
        this.router.navigate(['/login']);
      });
  }




}


