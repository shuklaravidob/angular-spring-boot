import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student.model';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students : Student[];
  studentForm: { reset: () => void; };
  formBuilder: any;

  constructor(private studentService : StudentService, private fromBuilder:FormBuilder,) {
    this.studentForm = this.formBuilder.group({
      stuId:'',
      firstName:'',
      lastName:'',
      rollNumber:'',
      dateOfBirth:'',
      address:'',
      contactNumber:''
    });
   }
  
  ngOnInit(): void {
     this.studentService.getStudents().subscribe(
       data => {
         this.students = data;
       }
     )
  }
  onSubmit(customerData) {
    // Process checkout data here
    this.students = this.studentService.student();
    this.studentForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}
