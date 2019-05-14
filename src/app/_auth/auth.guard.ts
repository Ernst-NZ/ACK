import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../_shared/user.service';
import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService, public globals: Globals, ) { }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot):  boolean {
  //     if (localStorage.getItem('userToken') != null)
  //     return true;
  //     // this.router.navigate(['/login']);
  //     return false;
  // }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('userToken')) {
      // logged in so return true
      console.log("Can Activate");
      if (localStorage.getItem('userName')) {
        this.setUser();
      }
      return true;

    }

    // not logged in so redirect to login page with the return url
    console.log("Unable to Activate");
  //  this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return true;
  }


  setUser() {
    var Welkom = "Hi "
    var naam = localStorage.getItem('userName')
    if (naam !== 'ack') {
      this.globals.userName = Welkom.concat(naam);
    }

    if (naam === "Ernst" ||
      naam === "Mario" ||
      naam === "admin") {
      this.globals.adminUser = true;
    } else {
      this.globals.adminUser = false;
    }

  }
}
