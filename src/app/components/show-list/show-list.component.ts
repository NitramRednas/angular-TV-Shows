import { Component, OnInit } from '@angular/core';
import { ShowDataService } from '../../services/show-data.service';
import { Show } from '../../model/show';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})

export class ShowListComponent implements OnInit {

  constructor(private showDataService: ShowDataService){
    
  }

  ngOnInit() {}

  get shows(): Show[] {
    return this.showDataService.shows;
  }
}
