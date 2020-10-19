import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Problem="";
  Problems=['Issue in software','Issue in CRM','Issue in transaction','Issue ib prodcuts','Add new product','Pause a product','Delete product','Want assistance','Other'];

  Message="";

}
