import { Component } from '@angular/core';
import { NgModule, ViewChild, enableProdMode, AfterViewInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxSelectBoxModule,
         DxTextAreaModule,
         DxFormModule,
         DxFormComponent } from 'devextreme-angular';
 import { Employee, Service } from './workerservice';


         if(!/localhost/.test(document.location.host)) {
          enableProdMode();


@Component({
  selector: 'app-workers',
  providers: [ Service ],
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements AfterViewInit {

  @ViewChild(DxFormComponent, { static: false }) myform: DxFormComponent;
  employee: Employee;
  positions: string[];
  rules: Object;

  constructor(service: Service) {
      this.employee = service.getEmployee();
      this.positions = service.getPositions();
      this.rules = { 'X': /[02-9]/ };
  }

  ngAfterViewInit() {
      this.myform.instance.validate()
  }
}
         }
