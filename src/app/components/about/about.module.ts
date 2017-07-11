import {NgModule} from "@angular/core";
import {BootstrapModalModule} from "ng2-bootstrap-modal";
import {CommonModule} from "@angular/common";
import {AboutComponent} from "./about.component";
import {AboutFormComponent} from "./about-form/about-form.component";
import {AboutRouting} from "./about.routing";

@NgModule({
  imports: [
    CommonModule,
    AboutRouting,
    BootstrapModalModule
  ],
  declarations: [
    AboutComponent,
    AboutFormComponent
  ],
  entryComponents: [AboutFormComponent]
})

export class AboutModule { }

