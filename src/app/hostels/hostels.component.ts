import { Component, OnInit } from '@angular/core';
import { HostelService } from '../services/hostel.service';
import { Hostel } from '../models/hostel.model';
@Component({
  selector: 'app-hostels',
  templateUrl: './hostels.component.html',
  styleUrls: ['./hostels.component.css']
})
export class HostelsComponent implements OnInit {
  hostels : Hostel[];
  constructor(private hostelService : HostelService) { }

  ngOnInit(): void {
    this.hostelService.getHostels().subscribe(
      data => {
        this.hostels = data;
      }
    )
  }

}
