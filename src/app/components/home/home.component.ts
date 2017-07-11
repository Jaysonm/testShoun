import { Component, OnInit } from '@angular/core';
import {DialogService} from "ng2-bootstrap-modal";
import {HomeFormComponent} from "./home-form/home-form.component";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dialogService:DialogService) { }

  ngOnInit() {}

  public showForm(){
    this.dialogService.addDialog(HomeFormComponent).subscribe();
  }

}
