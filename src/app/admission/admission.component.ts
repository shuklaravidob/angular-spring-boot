import { Component, OnInit } from '@angular/core';
import { AdmissionService } from '../services/admission.service';
import { Admission } from '../models/admission.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  formdata;
  students : Admission[];
  studentForm: { reset: () => void; };
  formBuilder: any;
  studentData : Admission;
  edit : boolean;
  displayModify : string;
  displaySubmit : string;
  admissions: Admission[];
  admissionForm: any;
  admissionData: Admission;

  constructor(private admissionService : AdmissionService, private fromBuilder:FormBuilder,) {
       this.edit = true;
       this.displayModify = 'inline';
       this.displaySubmit = 'none';
  

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
     this.admissionService.getAdmissions().subscribe(
       data => {
         this.admissions = data;
       }
     )
  }
  onSubmit(customerData) {
    // Process checkout data here
    this.admissions = this.admissionService.admission();
    this.admissionForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

  onClickSubmit(data) {
    this.admissionData = new Admission();
       this.admissionData.studentId = data.studentId;
       this.admissionData.enrollmentNumber = data.enrollmentNumber;
       this.admissionData.studentName = data.studentName;
       this.admissionData.rollNumber = data.rollNumber;
       this.admissionData.branch = data.branch;
       this.admissionData.courseName = data.courseName;
       this.admissionData.fatherName = data.fatherName;
       this.admissionData.motherName = data.motherName;
       this.admissionData.fatherContact = data.fatherContact;
       this.admissionData.motherContact = data.motherContact;
       this.admissionData.fatherOccupation = data.fatherOccupation;
       this.admissionData.motherOccupation = data.motherOccupation;
       this.admissionData.fatherIncome = data.fatherIncome;
       this.admissionData.motherIncome = data.motherOccupation;
       this.admissionData.dateOfBirth = data.dateOfBirth;
       this.admissionData.address = data.address;
       this.admissionData.pincode = data.pincode;
       this.admissionData.category = data.category;
       this.admissionData.religion = data.religion;
       this.admissionData.nationality = data.nationality;
       this.admissionData.date = data.date;
       this.admissionData.contactNumber = data.contactNumber;
       this.admissionData.email = data.email;
       this.admissionService.save(this.admissionData).subscribe(
          dataR => {
            alert("Student saved successfully ID : "+dataR.studentId+" Name : "+dataR.studentName+" "+dataR.rollNumber);
            this.ngOnInit();
          }
       );
      }
      deleteAdmission(admission : Admission) : void {
        console.log(admission.studentId)
        this.admissionService.deleteAdmission(admission).subscribe(
           data => {
              this.admissions = this.admissions.filter(u => u != admission);
           } 
        )
      }
      modifyAdmission() : void {
        console.log("Modify the admission");
        this.edit = false;
        this.displayModify = 'none'
        this.displaySubmit = 'inline';
      }
      submitAdmission(admission : Admission) : void {
        console.log(admission.studentId)
        this.admissionService.update(admission).subscribe(
          dataR => {
            alert("Admission saved successfully ID : "+dataR.studentId+" Name : "+dataR.studentName+" "+dataR.rollNumber);
            this.ngOnInit();
          }
       );
      }
}

