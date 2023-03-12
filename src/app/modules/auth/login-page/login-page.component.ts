import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    errorSession: boolean = false;

    formLogin: FormGroup = new FormGroup({});

    constructor(private _authService: AuthService) {  }

    ngOnInit(): void {
        this.formLogin = new FormGroup(
            {
                email: new FormControl('', [
                    Validators.required,
                    Validators.email,

                ]),
                password: new FormControl('', [
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(12)
                ])
            }
        )
    }

    sendLogin(): void {
        const {email, password} = this.formLogin.value
        
        this._authService.sendCredentials(email, password).subscribe(responseOk => {
            //cuando el ingresa correctamente retorna una peticion 200 OK
            console.log('session iniciada correcta', responseOk)
        },
        err => {
            this.errorSession = true;
            console.log('session iniciada correcta', err)
        })
    }
}
