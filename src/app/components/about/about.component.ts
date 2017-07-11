import { Component, OnInit } from '@angular/core';
import {DialogService} from "ng2-bootstrap-modal";
import {Test} from "../../model/test";
import {AboutFormComponent} from "./about-form/about-form.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private dialogService:DialogService) { }

  ngOnInit() {}

  public showForm(){
    var test : Test = new Test();
    test.id = 1;
    test.name = 'Jayson';
    this.dialogService.addDialog(AboutFormComponent, {test : test}).subscribe();
  }

}
