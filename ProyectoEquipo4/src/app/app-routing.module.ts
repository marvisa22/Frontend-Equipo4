import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ModalComponent } from './components/modal/modal.component';
import { PayedComponent } from './components/payed/payed.component';

const routes: Routes = [
  /*{path: '',redirectTo:'',pathMatch:'full'},*/
  {path: 'principal', component: PrincipalComponent},
  {path: 'home',component:HomeComponent},
  {path: 'modal', component: ModalComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'courses', component:CoursesComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'verificar-correo', component:VerificarCorreoComponent},
  {path: 'recuperar-password', component:RecuperarPasswordComponent},
  {path: 'payed', component:PayedComponent},
  {path: '**',redirectTo:'login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
