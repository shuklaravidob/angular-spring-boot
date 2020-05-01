import { Component, OnInit } from '@angular/core';
import { HostelService } from '../services/hostel.service';
import { Hostel } from '../models/hostel.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-hostels',
  templateUrl: './hostels.component.html',
  styleUrls: ['./hostels.component.css']
})
export class HostelsComponent implements OnInit {
  formdata;
  hostels : Hostel[];
  studentForm: { reset: () => void; };
  formBuilder: any;
  hostelData : Hostel;
  edit : boolean;
  displayModify : string;
  displaySubmit : string;
  constructor(private hostelService : HostelService) { 
    this.edit = true;
    this.displayModify = 'inline';
    this.displaySubmit = 'none'; this.formdata = new FormGroup({
      hostelId: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(3)
      ])),
      hostelName: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(3)
      ])),
      firstName:new FormControl(""),
      lastName:new FormControl(""),
      rollNumber:new FormControl(""),
      motherName:new FormControl(""),
      motherContact:new FormControl(""),
      fatherName:new FormControl(""),
      fatherContact:new FormControl(""),
      dateOfBirth:new FormControl(""),
      course:new FormControl(""),
      branch:new FormControl(""),
      year:new FormControl(""),
      semeter:new FormControl(""),
      roomNumber:new FormControl(""),
      idProof:new FormControl(""),
      guardianName:new FormControl(""),
      guardianContact:new FormControl(""),
      address:new FormControl(""),
      email:new FormControl(""),
      contactNumber:new FormControl("")
   });
  }

  ngOnInit(): void {
    this.hostelService.getHostels().subscribe(
      data => {
        this.hostels = data;
      }
    )
  }
 
  /*onSubmit(customerData) {
    // Process checkout data here
    this.hostels = this.hostelService.hostel();
    this.studentForm.reset();

    console.warn('Your order has been submitted', customerData);
  } */

  onClickSubmit(data) {
    this.hostelData = new Hostel();
       this.hostelData.hostelId = data.hostelId;
       this.hostelData.hostelName = data.hostelName;
       this.hostelData.firstName = data.firstName;
       this.hostelData.lastName = data.lastName;
       this.hostelData.rollNumber = data.rollNumber;
       this.hostelData.motherName = data.motherName;
       this.hostelData.motherContact = data.motherContact;
       this.hostelData.fatherName = data.fatherName;
       this.hostelData.fatherContact = data.fatherContact;
       this.hostelData.dateOfBirth = data.dateOfBirth;
       this.hostelData.course = data.course;
       this.hostelData.branch = data.branch;
       this.hostelData.year = data.year;
       this.hostelData.semester = data.semester;
       this.hostelData.roomNumber = data.roomNumber;
       this.hostelData.idProof = data.idProof;
       this.hostelData.guardianName = data.guardianName;
       this.hostelData.guardianContact = data.guardianContact;
       this.hostelData.address = data.address;
       this.hostelData.emailId = data.email;
       this.hostelData.contactNumber = data.contactNumber;
       this.hostelService.save(this.hostelData).subscribe(
          dataR => {
            alert("Hostel saved successfully ID : "+dataR.hostelId+" Name : "+dataR.hostelName+" "+dataR.firstName);
            this.ngOnInit();
          }
       );
      }
      deleteHostel(hostel : Hostel) : void {
        console.log(hostel.hostelId)
        this.hostelService.deleteHostel(hostel).subscribe(
           data => {
              this.hostels = this.hostels.filter(u => u != hostel);
           } 
        )
      }
      modifyHostel() : void {
        console.log("Modify the hostel");
        this.edit = false;
        this.displayModify = 'none'
        this.displaySubmit = 'inline';
      }
      submitHostel(hostel : Hostel) : void {
        console.log(hostel.hostelId)
        this.hostelService.update(hostel).subscribe(
          dataR => {
            alert("Hostel saved successfully ID : "+dataR.hostelId+" Name : "+dataR.hostelName+" "+dataR.firstName);
            this.ngOnInit();
          }
       );
      }
}
