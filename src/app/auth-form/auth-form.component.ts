import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, OnInit, Output, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AuthMessageComponent } from '../auth-message/auth-message.component';
import { AuthTestComponent } from '../auth-test/auth-test.component';
import { User } from './auth-form.interface';
import { AuthRememberComponent } from './auth-remember.component';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit,AfterContentInit,AfterViewInit {

  @ViewChild(AuthMessageComponent) message : AuthMessageComponent;

  @ViewChild('email') email: ElementRef;

  @ViewChildren(AuthMessageComponent) messages = new QueryList<AuthMessageComponent>();

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;
  constructor(
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  public showMessage: boolean;

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  
  ngAfterViewInit(): void {
    // this.email.nativeElement.setAttribute('placeholder', 'Enter your Email Address');
    // this.email.nativeElement.classList.add('email');
    // this.email.nativeElement.focus();

    this.renderer.setAttribute(this.email.nativeElement,'placeholder','Enter your Email');
    this.renderer.addClass(this.email.nativeElement,'email');

    
    this.messages.forEach(item => item.days = 30);
    this.cdr.detectChanges();
  }

  ngAfterContentInit(): void {
    if(this.remember){
      this.remember.forEach(item => {
        item.checked.subscribe((checked)=>this.showMessage=checked);
      })
    }
  }

}
