import {Injectable }from '@angular/core'; 
import {HttpClient, HttpHeaders }from '@angular/common/http'; 
import { HttpErrorResponse } from '@angular/common/http';
import {User }from './user.model'; 
import {Globals }from '../globals'; 
 
@Injectable()
export class UserService {
//  readonly rootURL ="http://localhost:3000"
 userClaims: any;
// readonly rootURL ="https://data.ezy.kiwi"
readonly rootURL = this.globals.dataSource
 
  constructor(private http:HttpClient, private globals:Globals) {}
 
  registerUser(user:User) {
    const body:User =  {
      UserName:user.UserName, 
      Password:user.Password, 
      Email:user.Email, 
      FirstName:user.FirstName, 
      LastName:user.LastName
    }
    var reqHeader = new HttpHeaders( {'No-Auth':'True'})
    return this.http.post(this.rootURL + '/api/User/Register', body,  {headers:reqHeader }); 
  }
  
  
  userAuthentication(userName, password) {
    console.log("user Athen")
    var data = "username=" + userName + "&password=" + password + "&grant_type=password"; 
    var reqHeader = new HttpHeaders( {'Content-Type':'application/x-www-urlencoded', 'No-Auth':'True'}); 
    return this.http.post(this.rootURL + '/token', data,  {headers:reqHeader }); 
  }


  getUserClaims() {
    console.log("get User claims")
    return  this.http.get(this.rootURL + '/api/GetUserClaims');   
   }

   setUser() {
    console.log("Set User")
    var Welkom = "Hi "
    this.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;
      console.log(this.userClaims)
      this.globals.userName = Welkom.concat(this.userClaims.FirstName);
      if (this.userClaims.UserName === "Ernst" || 
          this.userClaims.UserName === "Mario" ||
          this.userClaims.UserName === "admin") {
        this.globals.adminUser = true;
      } else {
        this.globals.adminUser = false;
      }
    },
    (err : HttpErrorResponse)=>{
      
    });
  }
}