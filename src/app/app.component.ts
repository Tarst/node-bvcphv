import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ifFlag: boolean = true;

  public changeFlag(): void {
    this.ifFlag = !this.ifFlag;
  }
}
