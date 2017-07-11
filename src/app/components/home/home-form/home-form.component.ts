import { Component, OnInit } from '@angular/core';
import {DialogService} from "ng2-bootstrap-modal";
import {DialogComponent} from "ng2-bootstrap-modal";
import {Test} from "../../../model/test";

export interface ConfirmModel {
  test : Test;
}

@Component({
  selector: 'app-home-form',
  templateUrl: 'home-form.component.html',
  styleUrls: ['home-form.component.css']
})
export class HomeFormComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel, OnInit {

  public title : string = 'TITRE';
  public test : Test;

  constructor(public dialogService:DialogService) {
    super(dialogService);
  }

  ngOnInit() {}
}
