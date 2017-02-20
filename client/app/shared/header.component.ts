import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'res-header',
  templateUrl: './header.component.html'
})
export class headerComponent implements OnInit {
  @Input() appReqType: string;
  constructor() { }

  ngOnInit() {
  }

}
