import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mark-sample3',
  templateUrl: './sample3.component.html',
  styleUrls: ['./sample3.component.css']
})
export class Sample3Component implements OnInit {

  @Input() test;
  @Output() custom = new EventEmitter();

  disabled = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.disabled = false;
      this.custom.emit();
    }, 5000);
  }

}
