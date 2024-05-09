import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{
  reservations: any
  constructor(private httpclient: HttpClient ) {
  }
  ngOnInit() {
    this.httpclient.get("http://localhost:8887/REGION-SERVICE/reservations")
      .subscribe({
        next: data=>{
          this.reservations = data
        },
        error: err => {
          console.log(err)
        }
      })
  }
}
