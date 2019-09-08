import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-airplane-detail",
  templateUrl: "./airplane-detail.component.html",
  styleUrls: ["./airplane-detail.component.css"]
})
export class AirplaneDetailComponent implements OnInit {
  airplane: any;

  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.rest
      .getAirplane(this.route.snapshot.params["id"])
      .subscribe((data: {}) => {
        console.log(data);
        this.airplane = data;
      });
  }
}
