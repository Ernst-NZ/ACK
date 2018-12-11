import { Component, OnInit } from '@angular/core';
import { LidmaatService } from '../_shared/lidmaat.service';

@Component({
  selector: 'app-lidmate',
  templateUrl: './lidmate.component.html',
  styleUrls: ['./lidmate.component.scss']
})
export class LidmateComponent implements OnInit {

  constructor(private service: LidmaatService
    ) { }

  ngOnInit() {
    
  }

}

