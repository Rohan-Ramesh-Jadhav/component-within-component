import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private visiblity: boolean = false;

  showHide()
  {
    this.visiblity = !this.visiblity;
  }

  getVisiblity(){
    return this.visiblity;
  }
}
