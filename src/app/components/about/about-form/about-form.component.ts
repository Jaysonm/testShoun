import { Component, OnInit } from '@angular/core';
import {Test} from "../../../model/test";
import {DialogComponent} from "ng2-bootstrap-modal";
import {DialogService} from "ng2-bootstrap-modal";

export interface ConfirmModel {
  test : Test;
}

@Component({
  selector: 'app-about-form',
  templateUrl: './about-form.component.html',
  styleUrls: ['./about-form.component.css']
})
export class AboutFormComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel, OnInit {

  public title : string = 'TITRE';
  public test : Test;

  constructor(public dialogService:DialogService) {
    super(dialogService);
  }

  ngOnInit() {}

}
