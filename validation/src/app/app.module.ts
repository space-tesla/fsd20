import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; // Import FormsModule


import { AppComponent } from './app.component';

import { UserValidationComponent } from './user-validation/user-validation.component';


@NgModule({

  declarations: [

    AppComponent,

    UserValidationComponent

  ],

  imports: [

    BrowserModule,

    FormsModule // Add FormsModule here

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }