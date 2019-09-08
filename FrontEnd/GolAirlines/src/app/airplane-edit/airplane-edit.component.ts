import { Component, OnInit, Input } from "@angular/core";
import { RestService } from "../rest.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-airplane-edit",
  templateUrl: "./airplane-edit.component.html",
  styleUrls: ["./airplane-edit.component.css"]
})
export class AirplaneEditComponent implements OnInit {
  airplaneModel: any;
  @Input() airplaneData = {
    code: "",
    airplaneModelId: 0,
    numberOfPassengers: 0,
    airplaneModel: {}
  };

  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.rest
      .getAirplane(this.route.snapshot.params["id"])
      .subscribe((data = {}) => {
        console.log(data);
        this.airplaneData = data;
      });

    this.rest.getAirplaneModels().subscribe((data = {}) => {
      console.log(data);
      this.airplaneModel = data;
    });
  }

  updateAirplane() {
    console.log();
    this.rest.updateAirplane(this.airplaneData).subscribe(
      result => {
        this.router.navigate(["/airplane-details/" + result.id]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
