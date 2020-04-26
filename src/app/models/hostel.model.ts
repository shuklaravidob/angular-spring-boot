import { EmailValidator } from '@angular/forms';

export class Hostel {
    hotelId : BigInteger;
    hostelName : string;
    firstName : string;
    lastName : string;
    rollNumber : BigInteger;
    motherName : string;
    motherContact : BigInteger;
    fatherName : string;
    fatherContact : BigInteger;
    dateofBirth : Date;
    course : string;
    branch : string;
    year : string;
    semester : string;
    roomNumber : BigInteger;
    idProof : BigInteger;
    guardianName : string;
    guardianContact : BigInteger;
    emailId : EmailValidator;
    contactNumber : BigInteger
}