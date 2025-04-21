import { Component } from '@angular/core';


@Component({

  selector: 'app-user-validation',

  templateUrl: './user-validation.component.html',

  styleUrls: ['./user-validation.component.css']

})

export class UserValidationComponent {

  username: string = '';

  password: string = '';

  usernameMessage: string = '';

  passwordMessage: string = '';


  validateUsername() {

    if (!this.username) {

      this.usernameMessage = '❌ Enter username';

    } else if (this.username.length < 3) {

      this.usernameMessage = '❌ Username is too short';

    } else {

      this.usernameMessage = '✅ Valid username';

    }

  }


  validatePassword() {

    if (this.password.length < 8) {

      this.passwordMessage = '❌ Password must be at least 8 characters';

    } else {

      this.passwordMessage = '✅ Valid password';

    }

  }

}

