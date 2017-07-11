import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about.component";

const aboutRoute : Routes = [
  { path: '', component: AboutComponent },
];

export const AboutRouting = RouterModule.forChild(aboutRoute);
