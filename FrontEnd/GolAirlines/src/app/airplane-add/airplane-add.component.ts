import { Component, OnInit, Input } from "@angular/core";
import { RestService } from "../rest.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-airplane-add",
  templateUrl: "./airplane-add.component.html",
  styleUrls: ["./airplane-add.component.css"]
})
export class AirplaneAddComponent implements OnInit {
  airplaneModel: any;
  @Input() airplaneData = {
    code: "",
    airplaneModelId: 0,
    numberOfPassengers: 0
  };

  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.rest.getAirplaneModels().subscribe((data = {}) => {
      console.log(data);
      this.airplaneModel = data;
    });
  }

  addAirplane() {
    this.rest.addAirplane(this.airplaneData).subscribe(
      result => {
        this.router.navigate(["/airplane"]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
