import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthRememberComponent } from './auth-form/auth-remember.component';
import { AuthTestComponent } from './auth-test/auth-test.component';
import { AuthMessageComponent } from './auth-message/auth-message.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    AuthRememberComponent,
    AuthTestComponent,
    AuthMessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
