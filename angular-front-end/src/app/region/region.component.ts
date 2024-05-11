import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit{
  regions : any;
  constructor(private httpclient: HttpClient) {
  }

  ngOnInit() {
    this.httpclient.get("http://localhost:8887/REGION-SERVICE/regions")
      .subscribe({
        next: data=>{
          this.regions = data
        },
        error: err => {
          console.log(err)
        }
      })
  }
}
