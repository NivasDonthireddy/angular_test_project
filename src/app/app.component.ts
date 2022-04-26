import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from './Post';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    
})
export class AppComponent {
    data: Post[] = [];
    loading: boolean;
    constructor(private http: HttpClient){}
    
    makeRequest(): void {
        this.loading = true;
        this.http
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .subscribe(data => {
        this.data = data;
        this.loading = false;
        });
    }

    onChange(event: any){
        console.log(event.target.files);
    }
        
}
