import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ListUserService} from '../server/list-user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-thongtin',
  templateUrl: './thongtin.component.html',
  styleUrls: ['./thongtin.component.css']
})
export class ThongtinComponent implements OnInit {

  constructor(private http: HttpClient, private ListUser: ListUserService, private route: Router) { }

  ListInfo: any;
  ListResult: any;
  Info ={
    username:null,
    email:null
  }
  ngOnInit() {
    this.ListUser.getStudents().subscribe(data =>{
      this.ListInfo = data;
    })
  }

  isShow=false;
  disable=true;

  click(){
    let flag:any =false;
    this.ListInfo.forEach(element => {
      if(element.username == this.Info.username && element.email == this.Info.email)
        flag = true;
    });
    if(flag == false)
    {
      alert("Thông Tin Chưa Chính Xác");
    }
    if(flag == true){
      this.isShow = !this.isShow;
      for(let i=0; i<this.ListInfo.length; i++)
        if(this.Info.username == this.ListInfo[i].username && this.Info.email == this.ListInfo[i].email)
        {
          this.ListResult = this.ListInfo[i];
        }
    }
  }


  
}
