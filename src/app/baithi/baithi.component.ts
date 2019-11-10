import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerService } from '../server/server.service'
import { ActivatedRoute, Router } from '@angular/router';
import { quizs } from '../server/list';
import { CountdownModule } from 'ngx-countdown';
import { ListUserService } from '../server/list-user.service';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-baithi',
  templateUrl: './baithi.component.html',
  styleUrls: ['./baithi.component.css']
})
export class BaithiComponent implements OnInit {


  itemsperpage = 1;
  currentpage = 1;

  quizs: any = [];

  constructor(private http: HttpClient, private route: ActivatedRoute, private listQuestion: ServerService, private userSV: ListUserService, private cook:CookieService, private route2:Router) {

  }

  userid: any;
  ListUser: any;
  List: any = [];
  Id:any;

  ngOnInit() {
    this.route.paramMap.subscribe(para => {
       this.Id = para.get('cid');
      this.listQuestion.getQuizs(this.Id).subscribe(data => {
        this.quizs = data;
        for (let i = 0; i < this.quizs.length; i++) {
          this.List[i] = { idcauhoi: this.quizs[i].Id, idcautraloidung: this.quizs[i].AnswerId, idcautraloi: null }
        };

      })

    });
  }

  check(idcauhoitruyenvao, idcautraloitruyenvao) {
    for (let i = 0; i < this.List.length; i++) {
      if (this.List[i].idcauhoi == idcauhoitruyenvao) {
        this.List[i].idcautraloi = idcautraloitruyenvao;
      }
    }
  }

  socaudalam = 0;
  socaudung = 0;
  diem: any;
  chamdiem() {
    for (let i = 0; i < this.List.length; i++) {
      if (this.List[i].idcautraloi == this.List[i].idcautraloidung) {
        this.socaudung += 1;

      }
      if (this.List[i].idcautraloi != null) {
        this.socaudalam += 1;
      }
    }
    console.log(this.socaudalam);
    console.log(this.socaudung);
    this.diem =((this.socaudung/this.List.length)*10).toFixed(2);
    console.log(this.diem);
    

    this.userSV.getStudents().subscribe(data =>{
      this.ListUser= data;
      this.userid = this.cook.get("id");
      for(let i =0; i<this.ListUser.length; i++)
      {
        if(this.ListUser[i].id == this.userid)
        {
          this.ListUser[i].marks.push({mark:this.diem, idmon:this.Id})
          this.http.put("https://cuong-dev1-api.herokuapp.com/studentsTwo/"+this.userid,this.ListUser[i]).subscribe(data =>{
            this.route2.navigate(['danhmucmonhoc']);
          });
        }
      }
    });

    
  }

  

}
