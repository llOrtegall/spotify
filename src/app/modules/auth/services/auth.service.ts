import { Injectable } from '@angular/core';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public sendCredentials(email: string, password: string): void {

  }
}
