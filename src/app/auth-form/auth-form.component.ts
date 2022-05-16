import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, OnInit, Output, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent{

  title: string = 'Login';

  constructor() { }

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
