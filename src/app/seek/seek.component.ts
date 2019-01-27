import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../info.model';
import { DataService } from './data.service';
import { SeekPost } from './seekpost.model';

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

  constructor(private dataService: DataService) { }


  ngOnInit() {
    return this.dataService.getInfo()
    .subscribe(data => this.Infos$ = data);
  }

  onSubmit() {
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
