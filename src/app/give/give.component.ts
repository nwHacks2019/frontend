import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { Info } from '../info.model';
import { DataService } from './data.service';
import { GivePost } from './givepost.model';
import { GiveNotifComponent } from '../give-notif/give-notif.component';

@Component({
  selector: 'app-give',
  templateUrl: './give.component.html',
  styleUrls: ['./give.component.css']
})
export class GiveComponent implements OnInit {

  Infos: Info[];
  giveInfo$: GivePost[];

  notifRef: any;

  constructor(public dialog: MatDialog, private dataService: DataService) {
    this.giveInfo$ = [];
  }

  userModel = new GivePost('Anmol Bajaj', 'anmol@gmail.com', 'Vancouver', 'Towels', 1);
  
  ngOnInit() {
    console.log('Requesting GET /give');
    this.dataService.getInfo()
      .subscribe((data: Info[]) => {
        this.Infos = data;
        console.log('Results from GET /give:');
        console.log(this.Infos);
      });
  }

  onSubmit() {
    this.notifRef = this.dialog.open(GiveNotifComponent, {
      width: '400px',
      panelClass: 'custom-notif',
      backdropClass: 'custom-notif-backdrop',
    });

    console.log('Requesting POST /give');
    console.log(this.userModel);
    this.dataService.postInfo(this.userModel)
    .subscribe(data => {
      let newPost = this.userModel.copy();
      newPost.id = data['id'];
      this.giveInfo$.push(newPost)
      console.log('Added to list with data from POST /give:');
      console.log(newPost);
    });
  }
}
