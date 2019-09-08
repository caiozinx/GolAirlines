import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AirplaneComponent } from "./airplane/airplane.component";
import { AirplaneDetailComponent } from "./airplane-detail/airplane-detail.component";
import { AirplaneAddComponent } from "./airplane-add/airplane-add.component";
import { AirplaneEditComponent } from "./airplane-edit/airplane-edit.component";
import { AirplaneModelEditComponent } from "./airplane-model-edit/airplane-model-edit.component";
import { AirplaneModelAddComponent } from "./airplane-model-add/airplane-model-add.component";
import { AirplaneModelDetailComponent } from "./airplane-model-detail/airplane-model-detail.component";
import { AirplaneModelComponent } from "./airplane-model/airplane-model.component";

const appRoutes: Routes = [
  {
    path: "airplane",
    component: AirplaneComponent,
    data: { title: "Airplane List" }
  },
  {
    path: "airplane-details/:id",
    component: AirplaneDetailComponent,
    data: { title: "Airplane Details" }
  },
  {
    path: "airplane-add",
    component: AirplaneAddComponent,
    data: { title: "Add Airplane" }
  },
  {
    path: "airplane-edit/:id",
    component: AirplaneEditComponent,
    data: { title: "Edit Airplane" }
  },
  {
    path: "",
    redirectTo: "/airplane",
    pathMatch: "full"
  },
  {
    path: "airplane-model",
    component: AirplaneModelComponent,
    data: { title: "Airplane List" }
  },
  {
    path: "airplane-model-details/:id",
    component: AirplaneModelDetailComponent,
    data: { title: "Airplane Details" }
  },
  {
    path: "airplane-model-add",
    component: AirplaneModelAddComponent,
    data: { title: "Add Airplane" }
  },
  {
    path: "airplane-model-edit/:id",
    component: AirplaneModelEditComponent,
    data: { title: "Edit Airplane" }
  },
  {
    path: "",
    redirectTo: "/airplane-model",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AirplaneComponent,
    AirplaneAddComponent,
    AirplaneDetailComponent,
    AirplaneEditComponent,
    AirplaneModelEditComponent,
    AirplaneModelAddComponent,
    AirplaneModelDetailComponent,
    AirplaneModelComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
