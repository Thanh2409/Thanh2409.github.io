import { Component, OnInit } from '@angular/core';
import { ListUserService } from '../server/list-user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dangki',
  templateUrl: './dangki.component.html',
  styleUrls: ['./dangki.component.css']
})
export class DangkiComponent implements OnInit {

  constructor(private listStudents: ListUserService, private http: HttpClient, private router: Router) { }

  listStudent: any;

  formStudent = {
    username: null,
    email: null,
    password: null,
    gender:null,
    fullname:null,
    schoolfee:null,
    birthday:Date,
    marks : []
  }
  ngOnInit() {
    this.listStudents.getStudents().subscribe(data => {
      this.listStudent = data;
    });
  }

  studentLogin() {
    let check: any = false;
    this.listStudent.forEach(item => {
      if (this.formStudent.email == item.email || this.formStudent.username == item.username) {
        check= true;
        return;
      }
      if(this.formStudent.email == null || this.formStudent.username == null || this.formStudent.password == null)
      {
        check = true;
        return;
      }
    });
    if(check == true){
      alert("Tài Khoản Hoặc Email Đã Được Đăng Kí Hoặc Chưa Đầy Đủ Thông Tin");
    }
    if (check == false) {
      this.postStudent();
    }
  }

  postStudent() {
    let newStudent = {
      username: this.formStudent.username,
      email: this.formStudent.email,
      password: this.formStudent.password,
      fullname: this.formStudent.fullname,
      birthday: this.formStudent.birthday,
      marks: []
    }
    this.http.post("https://cuong-dev1-api.herokuapp.com/studentsTwo", newStudent).subscribe(data => {
      alert("Đăng Kí Thành Công");
      this.router.navigate(['/dangnhap']);

    });
  }


}
