import { Component, OnInit } from '@angular/core';
import { Version } from '@angular/compiler';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showVersion() {
    alert("ACK Version 2.0.1");
  }

}
