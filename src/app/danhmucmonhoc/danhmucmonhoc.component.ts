import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ServerService} from '../server/server.service';
@Component({
  selector: 'app-danhmucmonhoc',
  templateUrl: './danhmucmonhoc.component.html',
  styleUrls: ['./danhmucmonhoc.component.css']
})
export class DanhmucmonhocComponent implements OnInit {

 
  itemsperpage = 8
  currentpage = 1
  totalpage : number;
  previouspage() {
    if (this.currentpage > 1)
      this.currentpage--;
    else
      return;
  }
  nextpage()
  {
    if(this.currentpage<3)
      this.currentpage++;
  }
  pagenow(sotrang){
    this.currentpage= +sotrang;
  }
// -----------

  constructor(private http:HttpClient, private List:ServerService) { }

  Subjects: any;
  ngOnInit() {
    this.List.getSub().subscribe(data => this.Subjects = data);
  }
}
