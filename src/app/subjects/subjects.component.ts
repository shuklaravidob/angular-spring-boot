import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';
import { Subject } from '../models/subject.model';
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  subjects : Subject[];
  constructor(private subjectService : SubjectService) { }

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe(
      data => {
        this.subjects = data;
      }
    )
  }

}
