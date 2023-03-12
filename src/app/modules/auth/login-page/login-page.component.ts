import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


    errorSession: boolean = false

    formLogin: FormGroup = new FormGroup({});

    constructor(private _authService: AuthService, private cookie: CookieService) { }

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

        const { email, password } = this.formLogin.value
        this._authService.sendCredentials(email, password)
            .subscribe(responseOk => {
                console.log('ingresa credenciales correctas', responseOk)
                const { tokenSession, data} = responseOk
                this.cookie.set('token', tokenSession, 1, '/')
                
            }, err => {
                this.errorSession = true
                console.log('Error Con Usuario y contraseña', err)
            }
            )
    }
}
