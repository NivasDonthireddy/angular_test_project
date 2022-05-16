import { AfterContentInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthMessageComponent } from './auth-message/auth-message.component';
import { AdDirective } from './ad.directive';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    
})
export class AppComponent implements OnInit,AfterContentInit{

    constructor(){}
    @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;

    ngOnInit(): void {
      let component = this.adHost.viewContainerRef.createComponent(AuthMessageComponent);
      component.instance.days = 20;
    }

    ngAfterContentInit(): void {
      
    }

    loginUser(user: any) {
    }
}
