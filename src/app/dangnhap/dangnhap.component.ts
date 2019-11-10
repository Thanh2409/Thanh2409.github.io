import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {ListUserService} from '../server/list-user.service';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {

  taikhoan: null
  matkhau: null

 
  InfoStudent: any;
  constructor(private listStudents: ListUserService, private http: HttpClient, private router: Router, private cook:CookieService) { }

  ngOnInit() {
    this.listStudents.getStudents().subscribe(data => {
      this.InfoStudent = data;
    });

  }
 
  
  check() {
    console.log(this.InfoStudent);
    let flag = false;
    this.InfoStudent.forEach(element => {
      if(this.taikhoan == null || this.matkhau == null){
        return;
      }
      if (element.username == this.taikhoan && element.password == this.matkhau) {
        this.cook.set("id",element.id, 1/24)
        alert("Đăng Nhập Thành Công")
        this.router.navigate(["/danhmucmonhoc"])
        flag = true;
      }
    });

    if (flag == false) 
    {
      alert("Sai Tài Khoản Hoặc Mật Khẩu")
    }

  }

  
}

