import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'First-App-Angular';
  @ViewChildren(UsersComponent) cellules!: QueryList<UsersComponent>;

  @ViewChild(UsersComponent)UsersComponent!:UsersComponent;
  ngAfterViewInit() {
    // Accéder à chaque cellule
    // this.cellules.forEach((cellule) => {
    //   console.log(cellule);
     
    // });
    console.log(this.cellules.length);
    console.log(this.cellules);
    console.log(this.UsersComponent.pp?.nativeElement.innerHTML);
  }
  ngOnInit(){
    console.log("hello iman");

  }
  
  
}
