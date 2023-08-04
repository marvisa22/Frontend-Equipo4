import { Injectable } from '@angular/core';
import { FirebaseErrorEnum } from '../utils/firebase-code-errror';

@Injectable({
  providedIn: 'root'
})
export class FirebaseErrorService {

  constructor() { }

  codeError(code: string) {

    switch (code) {
      //El correo ya existe
      case FirebaseErrorEnum.EmailAlreadyInUse:
        return 'El usuario ya existe';
      
      //Contraseña debil
      case FirebaseErrorEnum.WeakPassword:
        return 'La contraseña es muy debil';

      //Correo invalido
      case FirebaseErrorEnum.InvalidEmail:
        return 'El correo es invalido';

      //La contraseña es invalida
      case FirebaseErrorEnum.WrongPassword:
        return 'La contraseña es invalida';

      //El usuario no existe
      case FirebaseErrorEnum.UserNotFound:
        return 'El usuario no existe';
      default:
        return 'Error desconocido'
    }

  }

}
