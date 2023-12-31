import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShown: boolean = true;
  title: String = 'Disable the input';

  showInput(): void {
    this.isShown = !this.isShown;
    this.isShown ? this.title = "Disable the input" : this.title = "Enable the input"
  }

  keyUp(newTitle: string) {
    this.title=newTitle;
  }
}
