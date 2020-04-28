import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  formdata;
  students : Student[];
  studentForm: { reset: () => void; };
  formBuilder: any;
  studentData : Student;
  edit : boolean;
  displayModify : string;
  displaySubmit : string;

  constructor(private studentService : StudentService, private fromBuilder:FormBuilder,) {
       this.edit = true;
       this.displayModify = 'inline';
       this.displaySubmit = 'none';
   /* this.studentForm = this.formBuilder.group({
      stuId:'',
      firstName:'',
      lastName:'',
      rollNumber:'',
      dateOfBirth:'',
      address:'',
      contactNumber:''
    }); */

    this.formdata = new FormGroup({
      firstName: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(3)
      ])),
      lastName: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(3)
      ])),
      address:new FormControl(""),
      email:new FormControl(""),
      rollNumber:new FormControl(""),
      dateOfBirth:new FormControl(""),
      contactNumber:new FormControl("")
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

  onClickSubmit(data) {
    this.studentData = new Student();
       this.studentData.firstName = data.firstName;
       this.studentData.lastName = data.lastName;
       this.studentData.address = data.address;
       this.studentData.rollNumber = data.rollNumber;
       this.studentData.contactNumber = data.contactNumber;
       this.studentData.dateOfBirth = data.dateOfBirth;
       this.studentData.email = data.email;
       this.studentService.save(this.studentData).subscribe(
          dataR => {
            alert("Student saved successfully ID : "+dataR.studId+" Name : "+dataR.firstName+" "+dataR.lastName);
            this.ngOnInit();
          }
       );
      }
      deleteStudent(student : Student) : void {
        console.log(student.studId)
        this.studentService.deleteStudent(student).subscribe(
           data => {
              this.students = this.students.filter(u => u != student);
           } 
        )
      }
      modifyStudent() : void {
        console.log("Modify the student");
        this.edit = false;
        this.displayModify = 'none'
        this.displaySubmit = 'inline';
      }
      submitStudent(student : Student) : void {
        console.log(student.studId)
        this.studentService.update(student).subscribe(
          dataR => {
            alert("Student saved successfully ID : "+dataR.studId+" Name : "+dataR.firstName+" "+dataR.lastName);
            this.ngOnInit();
          }
       );
      }
}
