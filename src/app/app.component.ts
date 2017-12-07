import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '안녕하세요';
  names = [
    '이웅재',
    '박하은',
    '박찬양'
  ];

  custom() {
    console.log('custom');
  }
}
