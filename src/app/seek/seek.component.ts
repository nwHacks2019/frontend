import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';

import { Info } from '../info.model';
import { DataService } from './data.service';
import { GiveSeekRequest } from '../data-model/giveseekrequest.model';
import { SeekNotifComponent } from '../seek-notif/seek-notif.component';

@Component({
  selector: 'app-seek',
  templateUrl: './seek.component.html',
  styleUrls: ['./seek.component.css']
})
export class SeekComponent implements OnInit {

  Infos$: Info[];
  seekInfos$: Info[];
  userModel = new GiveSeekRequest('Anmol Bajaj', 'anmol@gmail.com', 'Vancouver', 'Towels', 1);
  pressSubmit = false;

  notifRef: any;

  constructor(public dialog: MatDialog, private dataService: DataService) {
    let info = new GiveSeekRequest('Anmol Bajaj', 'anmol@gmail.com', 'Vancouver', 'Towels', 1);
    this.seekInfos$ = [];
  }

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

    this.pressSubmit = !this.pressSubmit;

    console.log('Requesting POST /seek');
    console.log(this.userModel);
    this.dataService.postInfo(this.userModel)
      .subscribe(
        data => {
          let newPost = this.userModel.copy();
          newPost.id = data['id'];
          this.seekInfos$.push(newPost)
          console.log('Added to list with data from POST /seek:');
          console.log(newPost);
        }
      );
  }

}
