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

  Infos$: Info[];
  giveInfo$: GivePost[];

  notifRef: any;

  constructor(public dialog: MatDialog, private dataService: DataService) { }
  userModel = new GivePost('', '', '', '', 1 , '', '', '');
  // userModel = new GivePost('Anmol', 'anmol@gmail.com', 'vancouver', 'towls');
  giverArrayHack: string[] = [];
  ngOnInit() {
    return this.dataService.getInfo()
    .subscribe(data => this.Infos$ = data);
   }

   onSubmit() {
     this.notifRef = this.dialog.open(GiveNotifComponent, {
       width: '350px',
       panelClass: 'custom-notif',
       backdropClass: 'custom-notif-backdrop',
     });

     console.log(this.userModel);
     this.dataService.postInfo(this.userModel)
      .subscribe(
        // response => console.log('Success!', data),
        data => this.giveInfo$ = data);
        // error => console.log('Error', error)
        // );
      this.giverArrayHack.push(this.userModel.item);
      console.log(this.Infos$);
   }
}
