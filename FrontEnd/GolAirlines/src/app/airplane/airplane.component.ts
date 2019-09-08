import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-airplane",
  templateUrl: "./airplane.component.html",
  styleUrls: ["./airplane.component.css"]
})
export class AirplaneComponent implements OnInit {
  airplanes: any = [];

  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAirplanes();
  }

  getAirplanes() {
    this.airplanes = [];
    this.rest.getAirplanes().subscribe((data: {}) => {
      console.log(data);
      this.airplanes = data;
    });
  }

  add() {
    this.router.navigate(["/airplane-add"]);
  }

  delete(id) {
    this.rest.deleteAirplane(id).subscribe(
      res => {
        this.getAirplanes();
      },
      err => {
        console.log(err);
      }
    );
  }
}
