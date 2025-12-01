import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'crud-operations';

  // private messageSource = new BehaviorSubject<string>('');
  // private showSource = new BehaviorSubject<boolean>(false);

  // message$ = this.messageSource.asObservable();
  // show$ = this.showSource.asObservable();

  // showToast(message: string) {
  //   this.messageSource.next(message);
  //   this.showSource.next(true);

  //   setTimeout(() => {
  //     this.showSource.next(false);
  //   }, 3000);
  // }
}
