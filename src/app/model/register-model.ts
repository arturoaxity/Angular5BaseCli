export class RegisterModel {

     private _userName: String;
     private _nombre: String;
     private _password: String;
     private _confPassword: String;
     private _terminosCondiciones: boolean;
     private _email: String;


  get email(): String {
    return this._email;
  }

  set email(value: String) {
    this._email = value;
  }



  get userName(): String {
    return this._userName;
  }

  set userName(value: String) {
    this._userName = value;
  }

  get nombre(): String {
    return this._nombre;
  }

  set nombre(value: String) {
    this._nombre = value;
  }

  get password(): String {
    return this._password;
  }

  set password(value: String) {
    this._password = value;
  }

  get confPassword(): String {
    return this._confPassword;
  }

  set confPassword(value: String) {
    this._confPassword = value;
  }

  get terminosCondiciones(): boolean {
    return this._terminosCondiciones;
  }

  set terminosCondiciones(value: boolean) {
    this._terminosCondiciones = value;
  }
}
