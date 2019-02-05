import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Globals } from '../globals';
import { DataService } from '../_core/data.service';
import { IGroup } from '../_shared/interfaces';


@Component({
  selector: 'app-kerkraad',
  templateUrl: './kerkraad.component.html',
  styleUrls: ['./kerkraad.component.scss']
})
export class KerkraadComponent implements OnInit, AfterContentInit {
  isEditing: boolean;
  groepe:Array<IGroup> = [];;
  //newGroep: IGroup = new Student();
  // oldStudent: IStudent = new Student();

  constructor(public globals:Globals, private dataService:DataService) { }

  ngOnInit() {
       this.getGroepe();
  }

  ngAfterContentInit() {
    this.getGroepe();
  }
  getGroepe() {    
      this.dataService.getGroepe()
      .subscribe((groep:IGroup[]) => this.groepe = groep); 
      console.log(this.groepe);    
  }

   getStudents() {
  //   this.service.getStudents().
  //     then(students => {
  //       this.students = students;
  //     }).catch(error => {
  //       console.error(error);
  //       alert(error.message);
  //     });
   }
     // getStudents() {
  //   this.service.getStudents().
  //     then(students => {
  //       this.students = students;
  //     }).catch(error => {
  //       console.error(error);
  //       alert(error.message);
  //     });
  // }

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

  // clearNewStudent() {
  //   this.newStudent = new Student();
  // }

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
  //   this.oldStudent = new Student();
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

  // ## Update Delivery

  }
