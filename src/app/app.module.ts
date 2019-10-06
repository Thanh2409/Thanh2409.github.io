import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DanhmucmonhocComponent } from './danhmucmonhoc/danhmucmonhoc.component';
import { DangkiComponent } from './dangki/dangki.component';
import { QuenmatkhauComponent } from './quenmatkhau/quenmatkhau.component';
import { GopyComponent } from './gopy/gopy.component';
import { HoidapComponent } from './hoidap/hoidap.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    LienheComponent,
    DangnhapComponent,
    DanhmucmonhocComponent,
    DangkiComponent,
    QuenmatkhauComponent,
    GopyComponent,
    HoidapComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path : '', component: TrangchuComponent},
      {path : 'lienhe', component:LienheComponent},
      {path : 'gopy', component:GopyComponent},
      {path : 'hoidap', component:HoidapComponent},
      {path : 'dangki', component:DangkiComponent},
      {path : 'quenmatkhau', component:QuenmatkhauComponent},
      {path : 'danhmucmonhoc', component:DanhmucmonhocComponent},
      {path: 'dangnhap', component: DangnhapComponent},
      {path : '**', redirectTo: '', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
