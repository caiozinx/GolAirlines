import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-airplane-model-detail",
  templateUrl: "./airplane-model-detail.component.html",
  styleUrls: ["./airplane-model-detail.component.css"]
})
export class AirplaneModelDetailComponent implements OnInit {
  airplaneModel: any;

  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.rest
      .getAirplaneModel(this.route.snapshot.params["id"])
      .subscribe((data: {}) => {
        console.log(data);
        this.airplaneModel = data;
        console.log("airplaneModel", this.airplaneModel);
      });
  }
}
