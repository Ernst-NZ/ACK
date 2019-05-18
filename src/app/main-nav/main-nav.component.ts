import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from '../_shared/user.service';
import { Globals } from '../globals';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  currentUrl: string;
  userClaims: any;
  userName: String;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router,
     private userService: UserService, public globals: Globals) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {
   
  }
 
  Logout() {
   // localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    this.userClaims = '';
    this.router.navigate(['/menu']);
    this.globals.userName = '';
    this.globals.adminUser = false;
  }
 
}