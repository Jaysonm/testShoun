import {NgModule} from "@angular/core";
import {HomeFormComponent} from "./home-form/home-form.component";
import {BootstrapModalModule} from "ng2-bootstrap-modal";
import {CommonModule} from "@angular/common";
import {HomeRouting} from "./home.routing";
import {HomeComponent} from "./home.component";

@NgModule({
  imports: [
    CommonModule,
    HomeRouting,
    BootstrapModalModule
  ],
  declarations: [
    HomeComponent,
    HomeFormComponent
  ],
  entryComponents: [HomeFormComponent]
})

export class HomeModule { }
