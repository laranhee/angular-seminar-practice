import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css']
})
export class Sample2Component implements OnInit {
  name = 'mark';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.name = 'anna';
    }, 2000);
  }

  click(e) {
    console.log(e);
    this.name = 'zzang';
  }

}
