import { Component, OnInit, Input } from "@angular/core";
import { RestService } from "../rest.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-airplane-model-add",
  templateUrl: "./airplane-model-add.component.html",
  styleUrls: ["./airplane-model-add.component.css"]
})
export class AirplaneModelAddComponent implements OnInit {
  airplaneModel: any;
  @Input() airplaneData = {
    Company: "",
    Name: "",
    Role: ""
  };

  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  addAirplaneModel() {
    this.rest.addAirplaneModel(this.airplaneData).subscribe(
      result => {
        this.router.navigate(["/airplane-model"]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
