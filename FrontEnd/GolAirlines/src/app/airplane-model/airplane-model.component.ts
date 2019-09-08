import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-airplane-model",
  templateUrl: "./airplane-model.component.html",
  styleUrls: ["./airplane-model.component.css"]
})
export class AirplaneModelComponent implements OnInit {
  airplanesModels: any = [];

  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAirplaneModels();
  }

  getAirplaneModels() {
    this.airplanesModels = [];
    this.rest.getAirplaneModels().subscribe((data: {}) => {
      console.log(data);
      this.airplanesModels = data;
    });
  }

  add() {
    this.router.navigate(["/airplane-model-add"]);
  }

  delete(id) {
    this.rest.deleteAirplaneModel(id).subscribe(
      res => {
        this.getAirplaneModels();
      },
      err => {
        console.log(err);
      }
    );
  }
}
