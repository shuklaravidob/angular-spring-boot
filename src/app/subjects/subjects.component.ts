import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';
import { Subject } from '../models/subject.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
 
  formdata;
  subjects : Subject[];
  subjectForm: { reset: () => void; };
  formBuilder: any;
  subjectData : Subject;
  edit : boolean;
  displayModify : string;
  displaySubmit : string;

  constructor(private subjectService : SubjectService, ) { 
       this.edit = true;
       this.displayModify = 'inline';
       this.displaySubmit = 'none';

    this.formdata = new FormGroup({
      /* subId: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(3)
      ])), */
      subjectName: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(3)
      ])),
      subjectCode:new FormControl(""),
      branchName:new FormControl(""),
      branchCode:new FormControl(""),
      semester:new FormControl(""),
      course:new FormControl("")
   });
   }

 ngOnInit(): void {
    this.subjectService.getSubjects().subscribe(
      data => {
        this.subjects = data;
      }
    )
  }
 
 onsubmit(customerData) {
   // Process checkout data here
   this.subjects = this.subjectService.subject();
   this.subjectForm.reset();

   console.warn('Your order has been submitted', customerData);
 }

 onClickSubmit(data) {
   this.subjectData = new Subject();
      this.subjectData.subId = data.subjectId;
      this.subjectData.subName = data.subjectName;
      this.subjectData.subCode = data.subjectCode;
      this.subjectData.branchName = data.branchName;
      this.subjectData.branchCode = data.branchCode;
      this.subjectData.semester = data.semester;
      this.subjectData.course = data.course;
      this.subjectService.save(this.subjectData).subscribe(
         dataR => {
           alert("Subject saved successfully ID : "+dataR.subId+" Name : "+dataR.subName+" "+dataR.subCode);
           this.ngOnInit();
         }
      );
     }
     deleteSubject(subject : Subject) : void {
       console.log(subject.subId)
       this.subjectService.deleteSubject(subject).subscribe(
          data => {
             this.subjects = this.subjects.filter(u => u != subject);
          } 
       )
     }
     modifySubject() : void {
       console.log("Modify the subject");
       this.edit = false;
       this.displayModify = 'none'
       this.displaySubmit = 'inline';
     }
     submitSubject(Subject : Subject) : void {
       console.log(Subject.subId)
       this.subjectService.update(Subject).subscribe(
         dataR => {
           alert("Subject saved successfully ID : "+dataR.subId+" Name : "+dataR.subName+" "+dataR.subCode);
           this.ngOnInit();
         }
      );
     }
}