import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoidap',
  templateUrl: './hoidap.component.html',
  styleUrls: ['./hoidap.component.css']
})
export class HoidapComponent implements OnInit {

  constructor() { }

  ngOnInit() {


  }
  rep(){
    alert("Hệ Thống Sẽ Trả Lời Bạn Trong Thời Gian Sớm Nhất! Cảm Ơn!")
  }
}
