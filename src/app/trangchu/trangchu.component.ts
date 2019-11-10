import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ServerService} from '../server/server.service';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {

  curentpage=1;
  itemsperpage=6;
  
  constructor(private http:HttpClient, private List:ServerService) { }

  Subjects: any;
  ngOnInit() {
    this.List.getSub().subscribe(data => this.Subjects = data);
  }
  }

