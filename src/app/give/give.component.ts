import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../info.model';
import { DataService } from './data.service';
import { GivePost } from './givepost.model';


@Component({
  selector: 'app-give',
  templateUrl: './give.component.html',
  styleUrls: ['./give.component.css']
})
export class GiveComponent implements OnInit {

  Infos$: Info[];
  constructor(private dataService: DataService) { }
  userModel = new GivePost('anmol', 'hi', 'yo', 'dd', 7 , 'vv', 'd', 'd');
  // userModel = new GivePost('Anmol', 'anmol@gmail.com', 'vancouver', 'towls');
  giverArrayHack: string[] = [];
  ngOnInit() {
    return this.dataService.getInfo()
    .subscribe(data => this.Infos$ = data);

   }
   onSubmit() {
     console.log(this.userModel);
     this.dataService.postInfo(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.log('Error', error)
        );
      this.giverArrayHack.push(this.userModel.item);
      this.userModel.item = '';
   }
}
