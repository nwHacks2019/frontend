import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';

import { Info } from '../info.model';
import { DataService } from './data.service';
import { SeekPost } from './seekpost.model';
import { SeekNotifComponent } from '../seek-notif/seek-notif.component';

@Component({
  selector: 'app-seek',
  templateUrl: './seek.component.html',
  styleUrls: ['./seek.component.css']
})
export class SeekComponent implements OnInit {

  Infos$: Info[];
  seekInfos$: Info[];
  userModel = new SeekPost('', '', '', '', 1 , '', '', '');
  pressSubmit = false;

  notifRef: any;

  constructor(public dialog: MatDialog, private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getInfo()
    .subscribe(data => this.Infos$ = data);
  }

  onSubmit() {
    this.notifRef = this.dialog.open(SeekNotifComponent, {
      width: '400px',
      panelClass: 'custom-notif',
      backdropClass: 'custom-notif-backdrop',
    });

    console.log(this.userModel);
    this.dataService.postInfo(this.userModel)
     .subscribe(
      //  data => console.log('Success!', data));
        data => this.seekInfos$ = data);
       // error => console.log('Error', error)
        // );
      this.pressSubmit = !this.pressSubmit;
  }

}
