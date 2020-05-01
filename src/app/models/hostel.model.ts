import { EmailValidator } from '@angular/forms';

export class Hostel {
    hostelId : BigInteger;
    hostelName : string;
    firstName : string;
    lastName : string;
    rollNumber : BigInteger;
    motherName : string;
    motherContact : BigInteger;
    fatherName : string;
    fatherContact : BigInteger;
    dateOfBirth : Date;
    course : string;
    branch : string;
    year : string;
    semester : string;
    roomNumber : BigInteger;
    idProof : BigInteger;
    guardianName : string;
    guardianContact : BigInteger;
    address : string;
    emailId : EmailValidator;
    contactNumber : BigInteger
}