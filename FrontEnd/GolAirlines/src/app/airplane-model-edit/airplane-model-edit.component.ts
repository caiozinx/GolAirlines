import { Component, OnInit, Input } from "@angular/core";
import { RestService } from "../rest.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-airplane-model-edit",
  templateUrl: "./airplane-model-edit.component.html",
  styleUrls: ["./airplane-model-edit.component.css"]
})
export class AirplaneModelEditComponent implements OnInit {
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
    this.rest
      .getAirplaneModel(this.route.snapshot.params["id"])
      .subscribe((data = {}) => {
        console.log(data);
        this.airplaneData = data;
      });
  }

  updateAirplaneModel() {
    console.log();
    this.rest.updateAirplaneModel(this.airplaneData).subscribe(
      result => {
        this.router.navigate(["/airplane-model-details/" + result.id]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
