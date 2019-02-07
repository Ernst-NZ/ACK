import { Component, OnInit } from '@angular/core';
import { DataService } from '../_core/data.service';
import { IGroup, Group } from '../_shared/interfaces';

@Component({
  selector: 'app-gasvryheid',
  templateUrl: './gasvryheid.component.html',
  styleUrls: ['./gasvryheid.component.scss']
})
export class GasvryheidComponent implements OnInit {

  
  private service:DataService;
  students: Array<IGroup> = [];
  newStudent: IGroup = new Group();
  oldStudent: IGroup = new Group();


  constructor(service: DataService) {
    this.service = service;
   }

  ngOnInit() {
    this.getStudents();
  }


  getStudents() {
    this.service.getStudents().
      then(students => {
        this.students = students;
      }).catch(error => {
        console.error(error);
        alert(error.message);
      });
  }

  // addStudent() {
  //   this.service.addStudent(this.newStudent).
  //     then((addedStudents: IStudent[]) => {
  //       if (addedStudents.length > 0) {
  //         this.students.push(addedStudents[0]);
  //         this.clearNewStudent();
  //         alert('Successfully added');
  //       }
  //     }).catch(error => {
  //       console.error(error);
  //       alert(error.message);
  //     });
  // }

  clearNewStudent() {
    this.newStudent = new Group();
  }

  // deleteStudent(studentId) {
  //   this.service.deleteStudent(studentId).
  //     then(rowsDeleted => {
  //       if (rowsDeleted > 0) {
  //         const index = this.students.findIndex(student => student.id === studentId);
  //         this.students.splice(index, 1);
  //         alert('Successfully deleted');
  //       }
  //     }).catch(error => {
  //       console.error(error);
  //       alert(error.message);
  //     });
  // }

  // clearOldStudent() {
  //   this.oldStudent = new Delivery();
  // }

  // getStudent(studentId) {
  //   this.service.getStudent(studentId).
  //     then(students => {
  //       if (students.length > 0) {
  //         this.oldStudent = students[0];
  //       }
  //     }).catch(error => {
  //       console.error(error);
  //       alert(error.message);
  //     });
  // }

  // updateStudent() {
  //   const updatedValue: IStudent = {
  //     name: this.oldStudent.name,
  //     gender: this.oldStudent.gender,
  //     country: this.oldStudent.country,
  //     city: this.oldStudent.city
  //   };
  //   this.service.updateStudent(this.oldStudent.id, updatedValue).
  //     then(rowsUpdated => {
  //       if (rowsUpdated > 0) {
  //         const index = this.students.findIndex(student => student.id === this.oldStudent.id);
  //         this.students[index] = this.oldStudent;
  //         this.clearOldStudent();
  //         alert('Successfully updated');
  //       }
  //     }).catch(error => {
  //       console.error(error);
  //       alert(error.message);
  //     });
  // }


  // AddTest() {

  //   const myComics = [
  //     { id: 1, title: "Amazing Fantasy #15", published: "1962"
  //     }, { id: 2, title: "Detective Comics #27", published: "1939"
  //     }, { id: 3, title: "Action Comics #1", published:  "1938"
  //     }, { id: 4, title: "The Incredible Hulk #180", published:  "1974"
  //     }
  //   ];
    // if (window.indexedDB) {
    //   var request = indexedDB.open("comicsDB", 1);
    
    //   request.onerror = function(e){
    //     console.log(e);
    //   }
    
    //   request.onupgradeneeded = function(e){
    //     var db = e.target.result;
    //     var objectStore = db.createObjectStore("comics", {keyPath: "id"});
    //     objectStore.createIndex("title", "title", {unique: false});
    //     objectStore.transaction.oncomplete = function(e) {
    //       var store = db.transaction(["comics"], "readwrite").objectStore("comics");
    //       for ( var i = 0 ; i < myComics.length; i++) {
    //         store.add(myComics[i]);
    //       }
    //     }
    //   }
    
    //   request.onsuccess = function(e){
    //     console.log("success");
    //   }
    // }
  //}

}

