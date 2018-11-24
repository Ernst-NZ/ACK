import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getList() {
    return this.http.get('https://test1.zealsystems.co.nz/api/values/1');
  }
  getNews() {
    return this.http.get(`https://newsapi.org/v2/sources?apiKey=b814a268f1a14bd3970b14ed95842c9c`);
 }

}
