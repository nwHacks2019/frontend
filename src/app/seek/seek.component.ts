import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../info.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-seek',
  templateUrl: './seek.component.html',
  styleUrls: ['./seek.component.css']
})
export class SeekComponent implements OnInit {

  Infos$: Info[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getInfo()
    .subscribe(data => this.Infos$ = data);
  }

}
