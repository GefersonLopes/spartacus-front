import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '@spartacus/user/account/components';


@Component({
  selector: 'cx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class CustomLoginComponent extends LoginComponent {
  openModal: boolean = false;

  showModal() {
    this.openModal = true;
  }

  hideModal() {
    this.openModal = false;
  }

}
