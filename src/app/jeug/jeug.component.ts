import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-jeug',
  templateUrl: './jeug.component.html',
  styleUrls: ['./jeug.component.scss']
})
export class JeugComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

}
