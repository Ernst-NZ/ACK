import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_shared/user.service';

@Component({
  selector: 'app-persedit',
  templateUrl: './persedit.component.html',
  styleUrls: ['./persedit.component.scss']
})
export class PerseditComponent implements OnInit {
  userClaims: any;
 
  constructor(private router: Router, private userService: UserService) { }
 
  ngOnInit() {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;
 
    });
  }
 
  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
}