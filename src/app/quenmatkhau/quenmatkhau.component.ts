import { Component, OnInit } from '@angular/core';
import {ListUserService} from '../server/list-user.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quenmatkhau',
  templateUrl: './quenmatkhau.component.html',
  styleUrls: ['./quenmatkhau.component.css']
})
export class QuenmatkhauComponent implements OnInit {

  constructor(private listStudents: ListUserService, private http: HttpClient, private route: Router) { }

  InfoUser: any;

  Info={
    user:null,
    email:null,
    password:null
  }

  ngOnInit() {
    this.listStudents.getStudents().subscribe(data => {
      this.InfoUser=data;
      console.log(this.InfoUser);
      
    });
  }
  CheckData(){
    console.log(this.InfoUser);
    
    let flag :any = false;
    this.InfoUser.forEach(element => {
      if(this.Info.user == element.username && this.Info.email == element.email){
        flag= true;
        return;
      }
    });
    if(flag == false)
    {
      alert("Thông Tin Chưa Chính Xác");
    } 
    if(flag == true)
    {
      this.InfoResult();
    }
  }

  InfoResult(){
    for(let i =0 ; i<this.InfoUser.length; i++)
      {
        if(this.InfoUser[i].username == this.Info.user)
          this.Info.password = this.InfoUser[i].password;
      }
      alert("Mật Khẩu Tài Khoản Này Là: "+this.Info.password);
  }

}
