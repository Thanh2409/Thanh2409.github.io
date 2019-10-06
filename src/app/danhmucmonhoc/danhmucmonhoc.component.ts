import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danhmucmonhoc',
  templateUrl: './danhmucmonhoc.component.html',
  styleUrls: ['./danhmucmonhoc.component.css']
})
export class DanhmucmonhocComponent implements OnInit {


  dulieu=[
    {name: "ADBS",
      anh:"ADBS.jpg"
    },
    {name: "ASNE",
      anh:"ASNE.png"
    },
    {name: "CLCO",
      anh:"CLCO.jpg"
    },
    {name: "DBAV",
      anh:"DBAV.png"
    },
    {name: "DBBS",
      anh:"DBBS.png"
    },
    {name: "GAME",
      anh:"GAME.png"
    },
    {name: "HTCS",
      anh:"HTCS.jpg"
    },
    {name: "INMA",
      anh:"INMA.jpg"
    },
    {name: "JAAV",
      anh:"JAAV.png"
    },
    {name: "JSPR",
      anh:"JSPR.png"
    },
    {name: "LAYO",
      anh:"LAYO.jpg"
    },
    {name: "MOWE",
      anh:"MOWE.png"
    },
    {name: "PHPP",
      anh:"PHPP.png"
    },
    {name: "PMAG",
      anh:"PMAG.jpg"
    },
    {name: "SUBJECT",
      anh:"Subject.png"
    },
    {name: "VBPR",
      anh:"VBPR.png"
    },
    {name: "WEBU",
      anh:"WEBU.jpg"
    }
  ]

  itemsperpage = 4
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
    if(this.currentpage<5)
      this.currentpage++;
  }

  pagenow(sotrang){
    this.currentpage= +sotrang;
  }
  constructor() { }

  ngOnInit() {
  }

}
